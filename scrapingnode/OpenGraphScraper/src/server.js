const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const xpath = require('xpath');
const { DOMParser } = require('xmldom');
const cors = require('cors');

const app = express();
app.use(express.json()); // body-parser alternative
app.use(cors());

const xpaths = {
    title: 'string(//meta[@property="og:title"]/@content)',
    description: 'string(//meta[@property="og:description"]/@content)',
    image: 'string(//meta[@property="og:image"]/@content)',
    keywords: 'string(//meta[@property="og:keywords"]/@content)',
};
