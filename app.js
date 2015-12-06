var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end(Math.random() + '');
});

app.get('/treefort/iosbanner', function(req, res) {
	res.write('<html><head><meta name="apple-itunes-app" content="app-id=608181277"/></head><body>Treefort iOS banner test</body></html>');	
});

app.listen(process.env.PORT || 8888);
