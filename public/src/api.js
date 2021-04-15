//Create function to call API. Endpoint decides what data to fetch
const fetch = require('node-fetch')
module.exports = async function fetchData(endpoint) {
    const base_url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-04-14';
    const api_key = '&apiKey=f18f5e8130224c96a37cecaae806e753';
    
    const dataset = await fetch(base_url + endpoint + api_key);
    const json = await dataset.json();
    return json
}