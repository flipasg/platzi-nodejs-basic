let i = 0;
let intervalo = setInterval(() => {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
});

setImmediate(() => {
  console.log('Hola');
});


// require, exports

console.log(process)
console.log(__dirname)
console.log(__filename)
global.miVariable = 'elValor';
console.log(miVariable);
