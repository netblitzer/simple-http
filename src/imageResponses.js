const fs = require('fs');

// Preload all files
const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Index handler
const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img);
  response.end();
};

// Export the functions
module.exports = {
  getDankMemes,
};
