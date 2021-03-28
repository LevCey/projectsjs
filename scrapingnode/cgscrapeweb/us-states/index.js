// Coding Garden https://youtu.be/76d2yOMXmag

const axios = require("axios");

const page_url = "https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";

async function getUSStates() {
    const { data } = await axios.get(page_url);
    console.log(data);

}


getUSStates();

// https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States
// $('caption:contains("States of the United States of America")')[0].parentElement
// https://youtu.be/76d2yOMXmag?t=3213