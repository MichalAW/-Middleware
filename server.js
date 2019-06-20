var express = require('express');
var app = express();

app.use('/store', function (req, res, next) {
    console.log('Middleware');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('shop is here);
});

app.use(function (req, res, next) {
    res.status(404).send('sorry,wrong!')
});

app.listen(3000);