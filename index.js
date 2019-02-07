const http = require('http');
const url = require('url');
const handlers = require('./handlers/index');
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.write('Hello!');
    res.end();
}).listen(port);