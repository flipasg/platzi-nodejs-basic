function hola(nombre, callback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    callback(nombre);
  }, 1500);
}

function adios(nombre, callback) {
  setTimeout(function () {
    console.log('Adios, ' + nombre);
    callback();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('flipasg', function (nombre) {
  adios(nombre, function () {
    console.log('Terminando proceso...');
  });
});
