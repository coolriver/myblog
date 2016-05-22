'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: '10.104.100.164', 
    port: 80 

});

// Add the route
server.route({
    method: 'GET',
    path:'/{name}', 
    handler: function (request, reply) {
	console.log('get request');
        return reply('hello' + encodeURIComponent(request.params.name + '!'));
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
