const fetchData = require('../api.js')

//create function to render all popular movies. These will be rendered based on sorting (none by default).
module.exports = async function renderOverview(req, res) {
    const news = await fetchData('&sortBy=popularity')
    const articles = news.articles
    
    res.render('index', {articles: articles})
}