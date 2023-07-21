const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
const rs = fs.createReadStream(__dirname + '/stream.txt');
rs.on('data', (chunk) => {
  data += chunk;
});
rs.on('end', () => {
  console.log(data);
});

process.stdout.write('Hello ');

const Transform = stream.Transform;
function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

const mayus = new Mayus();
rs.pipe(mayus).pipe(process.stdout);
