var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end(Math.random() + '');
});

app.get('/iosbanner', function(req, res) {
	res.write('<html><body>iosbanner</body></html>');	
});

app.listen(process.env.PORT || 8888);
