module.exports = function(app){
	"use strict";
	return {
		_io : null,

		init : function(){
			this.io = require('socket.io')(app.server._server);
			this.listen();

		},
		listen : function(){
			this.io.on('connection',function(socket){
				console.log('un user est connecté');
				socket.on('msg', function(content){
					console.log(content);
					app.socket.io.emit('confirm', content);
				});
			});
		},
		emit : function(chan , content){
			app.socket.io.emit(chan, content);
		}
	}
}