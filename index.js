const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }
    const log = `${Date.now()}:${req.url}:${req.method} /New Request Received \n `;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Welcome to Home Page');
                break;
            case '/about':
                const username = myUrl.query.username;
                res.end(`Welcome to About Page ${username}`);
                break;
            default:
                res.end('Page Not Found');
        }
    });
});

myServer.listen(3000, () => {
    console.log('Server is listening on port 3000');
});