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
        sendEmail(url, price);
    } else {
        console.log('too expensive');
    }
}

const sendEmail = async (url, price) => {
    // const testAccount = await nodemailer.createTestAccount();
    const transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        //secure: false,
        auth: {
            user: 'nannie.yundt@ethereal.email',
            pass: 'nvK4GZRR5CW2xgMuNF'
        }
    });
    const info = await transport.sendMail({
        from: 'nannie.yundt@ethereal.email',
        to: 'nannie.yundt@ethereal.email',
        subject: 'amazon watcher',
        text: `${price} - ${url}`,
        html: `<p>${price}</p> <p>${url}</p>`,
    });
    console.log(nodemailer.getTestMessageUrl());
}

const watchPrice = (priceTarget, url, schedule = '*/5 * * * * *') => {
    cron.schedule(schedule, () => fetchPrice(url, priceTarget));
};

watchPrice(
    'https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR',
    49.99,
);