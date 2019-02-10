const http = require('http');
const url = require('url');
// const handlers = require('./handlers/index');
const favicon_handler = require('./handlers/favicon_handler');
const static_handler = require('./handlers/static_handler');
// const movie_handler = require('./handlers/movie_handler');
const port = 3000;

http.createServer((req, res) => {
    req.path = url.parse(req.url).pathname;
    console.log(req.path);
    // handlers.forEach(function(handler){
    //     console.log('Handler: ' + JSON.stringify(handler));
    //     if (handler.req === false){
    //         return;
    //     }
    // })
    console.log(JSON.stringify(favicon_handler(req,res)));
    if (favicon_handler(req,res) === false || static_handler(req,res) === false){
        return;
    }
}).listen(port);