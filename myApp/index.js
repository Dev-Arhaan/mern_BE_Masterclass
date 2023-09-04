// import {sum, diff} from './lib.js';
// import * as fs from 'node:fs/promises';
// import fs from 'fs';
const lib = require('./lib.js');
const fs = require('fs');

// const txt = fs.readFileSync('demo.txt', 'utf-8');
// console.log(txt)

fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});

console.log(lib.sum(4,5), lib.diff(6,3));
console.log("hello world");