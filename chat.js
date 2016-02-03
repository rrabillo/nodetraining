module.exports = function(app){
	"use strict";
	return{
		emit: function(content){
			console.log(content);
			app.socket.emit('newmessage', content);
		},
		receive: function(content){
			app.chat.emit(content);
		}
	}
}