let buffer = Buffer.alloc(8);
console.log(buffer);

buffer = Buffer.from([1, 2, 5]);
console.log(buffer);

buffer = Buffer.from('Hello');
console.log(buffer);

buffer = Buffer.from('Hello', 'utf8');
console.log(buffer);

buffer = Buffer.from('Hello', 'utf16le');
console.log(buffer);

buffer = Buffer.from('Hello', 'ascii');
console.log(buffer);