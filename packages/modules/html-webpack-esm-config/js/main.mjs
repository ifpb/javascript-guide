import {sum, minus} from './lib.mjs'
import date from 'date-fns'

console.log(sum(10, 5))
console.log(minus(10, 5))
console.log(date.format(new Date(2014, 1, 11), 'MM/DD/YYYY'))