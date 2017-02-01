const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

// Find out which port we're using
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Handler for requests
const onRequest = (request, response) => {
  console.log(request.url);

  // Redirect to appropriate handler
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getDankMemes(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

// Create the server on the port
http.createServer(onRequest).listen(port);

console.log(`Listening on localhost:${port}`);
