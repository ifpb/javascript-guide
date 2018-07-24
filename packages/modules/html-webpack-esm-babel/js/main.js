import {sum, minus, pow} from './lib.js'
import {format} from 'date-fns'

console.log(sum(10, 5))
console.log(minus(10, 5))
console.log(pow(10, 5))
console.log(format(new Date(2014, 1, 11), 'MM/DD/YYYY'))