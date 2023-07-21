const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('OS type: ', os.type());
console.log('OS version: ', os.version());
console.log('User info: ', os.userInfo());
console.log('Constans', os.constants);
console.log('CPU info: ', os.cpus());
console.log('CPU architecture: ', os.arch());
console.log('Uptime: ', os.uptime(), 'seconds');
console.log('Free memory: ', os.freemem(), 'gb');
console.log('Total memory: ', os.totalmem(), 'gb');
