var app = {};
	app.server = require('./server')();
	app.server.create();
	app.socket = require('./socket')(app);
	app.socket.init();
	app.chat = require('./chat')(app);
