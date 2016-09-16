age = 27;
//console.log(age);

//let age; 
/**
 * in ES6: Uncaught ReferenceError: age is not defined
 * seems to work with babel though, probably because it 
 * gets transformed into a 'var'
 */

//-----------------------------------------------------

function setAge(){
  age = 27;
}

let age;
setAge();
//console.log(age); // 27
/**
 * here it works because it IS declared before it is used 
 * aka before the function call
 */
         