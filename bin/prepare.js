#! /usr/bin/env node
const colors = require('colors');
const zversion = require('@zguillez/z-version');
const zgit = require('@zguillez/z-git');
// -----------------------------------
zversion.update();
zgit.push('master', 'update');
console.log(`=> Done!\n`.green);
