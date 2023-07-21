// const p = require('process');

process.on('beforeExit', () => {
  console.log('The process is going to end');
});

process.on('exit', () => {
  console.log('The process ended');
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});

setTimeout(() => {
  console.log('This will run before the exit');
});

process.on('uncaughtException', (err, origin) => {
  console.error('There was an uncaught exception');
  console.error(err);
});

process.on('uncaughtRejection', (err, origin) => {
  console.error('There was an uncaught rejection');
  console.error(err);
});
