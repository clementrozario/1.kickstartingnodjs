const http = require('http');

const server = http.createServer((request, response) => {
  const { url } = request;

  if (url === '/home') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Welcome home');
  } else if (url === '/about') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Welcome to About Us page');
  } else if (url === '/node') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Welcome to my Node Js project');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});

