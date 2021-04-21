const renderNewSight = require('./public/src/routes/newSight')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var path = require('path');
const port = process.env.PORT || 3000

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/newsight', renderNewSight)

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at: http://localhost:${port}`)
})