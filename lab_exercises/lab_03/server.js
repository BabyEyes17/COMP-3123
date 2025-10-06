const http = require('http');

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost';

const server = http.createServer( (req , res) => {
    console.log(`Request received: ${req.method} - ${req.url}`);
    if(req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Welcome to the Node.js Server!</h1>');
    } 
    
    else if(req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>About Us</h1><p>This is a simple Node.js server.</p>');
    } 
    
    else if(req.method === 'GET' && req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Contact Us</h1><p>Email: p@p.com</p>');
    } 
    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('404 Not Found\n');
    }
    
    res.end();
    // res.end('Hello, World!\n');
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
});