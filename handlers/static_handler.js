const fs = require('fs');

function get_content_type(path){
    if (path.endsWith('.css')){
        return 'text/css';
    } else if (path.endsWith('.ico')){
        return 'image/x-icon';
    } else if (path.endsWith('.png')){
        return 'image/png';
    } else if (path.endsWith('jpg')){
        return 'image/jpg';
    } else if (path.endsWith('.js')){
        return 'text/javascript'
    }
}

module.exports = (req, res) => {
    if (req.path.startsWith('/public') && req.method === 'GET'){
        fs.readFile(`./${req.path}`, (error, data) => {
            if (error){
                console.log(error);
                return;
            }
            res.writeHead(200, {
                'content-type': get_content_type(req.path)
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}