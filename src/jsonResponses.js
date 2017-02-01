const text = require('./textResponses.js');

// Handler for JSON hello object
const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };

  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Handler for JSON time object
const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };

  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Export the functions
module.exports = {
  getHelloJSON,
  getTimeJSON,
};
