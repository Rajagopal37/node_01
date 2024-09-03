const { createServer } = require('node:http');
const fs = require('fs');
const path = require('path');

// Folder where the text files will be stored
const folderPath = './';

// Function to get the list of text files in the folder
const getTextFiles = () => {
  return fs.readdirSync(folderPath).filter(file => path.extname(file) === '.txt');
};

const server = createServer((req, res) => {
  const url = req.url;
  
  if (url === '/') {
    // Get the current date-time for the file name
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().replace(/:/g, '-').split('.')[0];  // Format: YYYY-MM-DDTHH-MM-SS

    // Get the current timestamp to write inside the file
    const currentTimestamp = currentDateTime.toISOString();

    // Create and write the file with the current date-time as the filename
    fs.writeFile(`${formattedDateTime}.txt`, currentTimestamp, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`File created and timestamp saved as ${formattedDateTime}.txt!`);
      }
    });

    // Send response to the client with current date-time in <h1>
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Current Date and Time: ${currentDateTime.toString()}</h1>`);
  } else if (url === '/files') {
    // API endpoint to retrieve all text files in the folder
    const files = getTextFiles();

    // Respond with the list of files in JSON format
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(files));
    console.log('GET /files endpoint was hit');

  } else {
    // Handle 404 - Page Not Found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Not Found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
  console.log('GET /files endpoint was hit');
});

















// const { createServer } = require('node:http');


// const fs = require('fs');


// const server = createServer((req, res) => {





//     const currentDateTime = new Date();
//     const currentTimestamp = currentDateTime.toISOString();

//     const filename = 'current_timestamp.txt';

//   fs.writeFile(filename, currentTimestamp, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`File updated with new timestamp: ${filename}`);
//     }
//   });





//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(`<h1>Current Date and Time: ${currentDateTime}</h1>`);
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });









// const { createServer } = require('node:http');
// const fs = require('fs');

// const server = createServer((req, res) => {
//   // Get the current date-time for the file name and to display
//   const currentDateTime = new Date();
//   const formattedDateTime = currentDateTime.toISOString().replace(/:/g, '-').split('.')[0];  // Format: YYYY-MM-DDTHH-MM-SS

//   // Get the current timestamp to write inside the file
//   const currentTimestamp = currentDateTime.toISOString();

//   // Create and write the file with the current date-time as the filename
//   fs.writeFile(`${formattedDateTime}.txt`, currentTimestamp, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`File created and timestamp saved as ${formattedDateTime}.txt!`);
//     }
//   });

//   // Send response to the client with current date and time
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(`<h1>Hello World! Current Date and Time: ${currentDateTime}</h1>`);
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });


















// // server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`





// const fs = require('node:fs');

// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });


