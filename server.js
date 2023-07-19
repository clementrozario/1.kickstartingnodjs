const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(`Hello, my name is clement.`);
});

server.listen(4000);
console.log(`Server is running on port 4000.`);