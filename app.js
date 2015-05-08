var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end(Math.random() + '');
});

app.listen(process.env.PORT || 8888);