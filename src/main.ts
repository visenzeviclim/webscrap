const axios = require('axios');
const cheerio = require('cheerio');

const page_url:string = "https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";

async function main() {
    const {data} = await axios.get(page_url);
    const $ = cheerio.load(data);
    const table = $('caption:contains("States of the United States of America")').parent();
    const states = [];
    table.find('tbody tr').each((i:number, element:Element)=>{
        const $element = $(element);
        const state = {
            name: undefined
        };
        state.name = $element.find('th').text();
        console.log(state);
    })
}

main();