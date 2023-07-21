const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', function (dato) {
  console.log('¿Está muerto?');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', function () {
  console.log('el proceso terminó');
  console.log(proceso.killed);
});

exec('node modules/console.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});