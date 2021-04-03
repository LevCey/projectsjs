const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

const fetchPrice = async (url, targetPrice) => {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const priceText = $('#priceblock_ourprice').text();
    const price = parseFloat(priceText.replace('£', ''));
    console.log(price);

    if (targetPrice >= price) {
        console.log('cheap enough');
    } else {
        console.log('too expensive');
    }
}

fetchPrice(
    'https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR',
    49.99,
);