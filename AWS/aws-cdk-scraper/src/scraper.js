const AWS = require('aws-sdk');
const cheerio = require('cheerio');
const fetch = require("node-fetch");

const TABLE_NAME = process.env.TABLE_NAME;
const SCAPER_URL = "http://statleaders.ufc.com/";

const client = new AWS.DynamoDB.DocumentClient();

exports.scrape = async function (event, context) {  // exports.scrape =
    // fetch the HTML from the UFC website
    const response = await fetch(SCAPER_URL);
    const html = await response.text();
    const $ = cheerio.load(html);

    // get each section
    const resultsGroup = $(".results-group");

    const fighterStatistics = [];

    // iterate over the sections
    resultsGroup.each(function (i, result) {
        // get the name of the statistic (“Total Fights”, etc)
        const statistic = $(result).find("header > h3").text();

        // find each row in the table for that statistic
        $(result)
            .find(".results-table--tr")
            .each(function (i, row) {
                const result = $(row)
                    .find("span")
                    .map((i, el) => $(el).text())
                    .get();

                // get the data from each table row
                const [position, name, value] = result;
                const isHeaderRow = result.length > 3;

                if (!isHeaderRow) {
                    fighterStatistics.push({
                        name,
                        statistic,
                        value,
                        position
                    });
                }
            });
    });

    try {
        // Write all the fighter statistics into DynamoDB
        await Promise.all(fighterStatistics.map((result) =>
            client
                .put({
                    TableName: TABLE_NAME,
                    Item: result,
                })
                .promise()
        ));

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                results: fighterStatistics,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};