/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Abdirahman Osman Student ID: 115185175 Date: ________________
*
*  Online (Cyclic) URL: _______________________________________________________
*
********************************************************************************/ 
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Abdirahman Osman -115185175');
    res.end();
});

server.listen(8000, 'localhost', () => {
    console.log('Listening for requests on port 8000');
});
