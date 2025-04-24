const http = require('http');
const { stringify } = require('querystring');
const fs = require('fs');

//3.1
let count = 0
let requests = []
const server = http.createServer((req, res) => {
    count++;
    if (req.url === '/requests' && req.method === 'GET') {
        requests.push(req)
        res.write(`count rerequests: ${count}`);
        res.write('\n')
        res.write(stringify(requests));
        res.end();
    }
    else {
        res.write(`welcome to our site,\nreguest: ${req.method},\nurl:${req.url}`);
        res.end();
    }
});
server.listen(5050)
//3.2
const server2 = http.createServer((req, res) => {
    if (req.url === '/cards' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the cards page!');
        res.end();
    }
    else if (req.url === '/checks' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            message: 'Welcome to the checks page!',
            status: 'ok'
        }
        ));
        res.end();
    }
    else if (req.url === '/page' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./index.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile('./IMG_3041.JPG', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
        res.end();
    }
});
server2.listen(3000);