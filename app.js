var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    if (req.url == '/' || req.url == '/home') {
        res.sendFile(__dirname + '/public/index.html');
    } else {
        res.sendFile(__dirname + '/public/404.html');
    }
});

app.listen(8000, function() {
    console.log('Esperando peticiones en el puerto 7000');
});