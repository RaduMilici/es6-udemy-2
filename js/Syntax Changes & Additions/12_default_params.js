/**
 * valid:
 * function isEqual(number, compare = number){
 * function isEqual(number, compare = 10 / 2){
 *  
 * let a = 100;
 * function isEqual(number = compare, compare = a){
 * 
 * invalid: 
 * compare is undefined
 * function isEqual(number = compare, compare = 10){ 
 */

function isEqual(number, compare = 0){
  return number === compare;
}

//console.log( isEqual(10, 10) ); // true
//console.log( isEqual(10) );     // false