const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const yup = require('yup');
const nanoid = require('nanoid');

const app = express();
require('dotenv').config();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/url/:id', (req, res) => {
});

app.get('/:id', (req, res) => {

});

const schema = yup.object().shape({
    slag: yup.string().trim().matches(/[\w\-]/i),
    url: yup.string().trim().url().required(),

});

app.post('/url', async (req, res) => {
    const { slug, url } = req.body;

    if (!slug) {
        slug = nanoid();
    }

    try {
        await schema.validate({
            slug,
            url
        })
    } catch (error) {

    }

});

app.get('/', (req, res) => {
    res.json({ message: 'Short url maker to use on code' });
});




const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});