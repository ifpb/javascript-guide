var math = require('./lib.js')
var date = require('date-fns')

console.log(math.sum(10, 5))
console.log(math.minus(10, 5))
console.log(date.format(new Date(2014, 1, 11), 'MM/DD/YYYY'))