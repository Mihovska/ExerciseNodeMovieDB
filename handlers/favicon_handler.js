const fs = require('fs');

module.exports = (req, res) => {
    if (req.path.startsWith('../views/home.html') && req.method === 'GET'){
        fs.readFile('../views/home.html', (error, data) => {
            if (error){
                console.log(error);
                return;
            }
            console.log('DATA: ' + JSON.stringify(data));
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}