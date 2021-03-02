const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

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

app.post('/url', (req, res) => {

});

app.get('/', (req, res) => {
    res.json({ message: 'Short url maker to use on code' });
});






const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});