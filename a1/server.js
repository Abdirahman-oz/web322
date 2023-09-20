/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Abdirahman Osman Student ID: 115185175 Date: 2023-09-15
*
*  Online (Cyclic) URL: https://tasty-swimsuit-pig.cyclic.app/
*
********************************************************************************/ 
const express = require('express');
const app = express();

const HTTP_PORT = process.env.Port || 8000;

app.get(('/'),(req,res)=>{
res.send('Abdirahman Osman-- 115185175')

})

app.listen(HTTP_PORT,() =>{

    console.log('Listening for requests on port 8000');

});
