var exp = require ('express')();
var http = require('http');

module.exports = function(){
	"use strict";
	return {
		_server : null,

		create : function(){
			this._server = http.createServer(exp);
			this.route();
			this.listen();
		},
		listen : function(){
			this._server.listen(1337, function(){
				console.log('mon serveur tourne sur 1337');
			});
		},
		route : function(){
			exp.get('/', function(req, res){
				res.sendFile(__dirname + '/index.html');
			});	
		}
	}
}