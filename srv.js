let http = require('http');
let fs = require('fs');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    fs.readFile('start.html', {encoding: 'utf8'}, function(err, data) {
        if (!err) {
            res.end(data);
        } else {
            console.log(err);
        }
    });
});
app.get('/game', function(req, res) {
    fs.readFile('pac.html', {encoding: 'utf8'}, function(err, data) {
        if (!err) {
            res.end(data);
        } else {
            console.log(err);
        }
    });
});
app.get('/start', function(req, res) {
    fs.readFile('start.html', {encoding: 'utf8'}, function(err, data) {
        if (!err) {
            res.end(data);
        } else {
            console.log(err);
        }
    });
});

app.post('/read_map', function(req, res) {
    fs.readFile('map'+req.body["stage"]+'.txt', function(err, data) {
        if (!err) {
            res.end(data);
        } else {
            console.log(err);
        }
    });
});

app.listen(process.env.PORT || port);