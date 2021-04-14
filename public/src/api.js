//Create function to call API. Endpoint decides what data to fetch
const fetch = require('node-fetch')
module.exports = async function fetchData(endpoint) {
    const base_url = 'https://api.themoviedb.org/3/movie/';
    const api_key = '?api_key=6b14c4c8bcc5ae16e8216d9385a1b3a9';
    
    const dataset = await fetch(base_url + endpoint + api_key);
    const json = await dataset.json();
    
    return json
}