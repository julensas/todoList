/**
 * Created by Julius_b on 3/23/2016.
 */
var express = require('express');
var parser = require('body-parser');

var app = new express();


app.get('/', function(req, res) {
		res.render('./../app/index.ejs', {});		
	})
	.use(express.static(__dirname + '/../.tmp'));
app.use('/bower_components/foundation',
	express.static(__dirname + '/../bower_components/foundation'));
app.use('/jquery', express.static(__dirname + '/../node_modules/jquery/dist/'));
app.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
require('./routes/items')(app);