// Coding Garden https://youtu.be/76d2yOMXmag

const axios = require('axios');
const cheerio = require('cheerio');

const page_url = "https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";

async function getUSStates() {
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    const table = $('caption:contains("States of the United States of America")').parent();
    const body = table.find('tbody tr').slice(2).each((i, element) => {
        const $element = $(element);
        const state = {};
        state.name = $element.find('th a').first().text().trim();
        console.log(state);
    });

}


getUSStates();

// https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States
// $('caption:contains("States of the United States of America")')[0].parentElement
// https://youtu.be/76d2yOMXmag?t=3213