const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'UTF-8');
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');