// Custom Module
const arithmetics = require('./modules/arithmetics.js');
const {add, subtract} = require('./modules/arithmetics.js');

// Core Modules
const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');




global = 1000
console.log(global)
console.log(__dirname)
console.log(__filename)
console.log(process)
console.log(module)

// Using local modules
console.log(arithmetics)
console.log(arithmetics.add(10, 10))
console.log(arithmetics.subtract(100, 10))
console.log(arithmetics.mul(9, 12))
console.log(arithmetics.div(10, 2))

const college = require('./modules/college.js')

console.log(exports)