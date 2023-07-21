const fs = require('fs');

let data = '';
const rs = fs.createReadStream(__dirname + '/stream.txt');
rs.on('data', (chunk) => {
  data += chunk;
});
rs.on('end', () => {
  console.log(data);
});
