// Tutorial: https://youtu.be/H5ObmDUjKV4

const nightmare = require('nightmare')();

require('dotenv').config();
process.env.SENDGRID_API_KEY;

const args = process.argv.slice(2);
const url = args[0];
const minPrice = args[1];

checkPrice();

async function checkPrice() {
    const priceString = await nightmare.goto("https://www.amazon.com/Samsung-970-EVO-1TB-MZ-V7E1T0BW/dp/B07BN217QG")
        .wait("#priceblock_ourprice")
        .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
        .end()

    const priceNumber = parseFloat(priceString.replace('$', ''));

    if (priceNumber < 150) {
        console.log(`It is cheap ${priceNumber}`);

    } else {
        console.log(`It is expensive ${priceNumber}`);
    }
}