const http = require('http');

function router(req, res) {
  console.log('request event');
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('Hello World!');
      break;
    case '/about':
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('This is the about page!');
      break;
    default:
      res.writeHead(404, { 'content-type': 'text/plain' });
      res.end('404 error');
  }
};
const server = http.createServer((req, res) => {
  console.log('request event');
  console.log(req.url);
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000, () => {
  console.log('Server listening on port : 3000....');
});
const server2 = http.createServer(router).listen(3001, () => {
  console.log('Server listening on port : 3001....');
});
