'use strict';
const zlog = require('../src/Zlog.js');
zlog.log('test log');
zlog.success('success log');
zlog.warning('warning log');
zlog.info('info log');
zlog.force('force log');
zlog.error('error log');
console.log('done!');
