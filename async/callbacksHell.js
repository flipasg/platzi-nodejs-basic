function hola(nombre, callback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    callback(nombre);
  }, 1500);
}

function hablar(callback) {
  setTimeout(function () {
    console.log('Bla bla bla bla...');
    callback();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(function () {
    console.log('Adios, ' + nombre);
    callback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log('Iniciando proceso...');
// hola('flipasg', function (nombre) {
//   hablar(function () {
//     adios(nombre, function () {
//       console.log('Terminando proceso...');
//     });
//   });
// });

hola('flipasg', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso terminado');
  });
});
