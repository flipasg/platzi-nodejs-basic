const moment = require('moment');

const today = moment();
console.log(today.format('YYYY/MM/DD'));

const birthday = moment('1995-12-25');
console.log(birthday.format('YYYY/MM/DD'));

const howOld = today.diff(birthday, 'years');
console.log(howOld);

