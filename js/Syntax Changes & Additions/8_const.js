const age = 27;
//age = 29; // BabelLoaderError: SyntaxError: "age" is read-only

//-----------------------------------------------------

const ages = [ 26, 43, 21 ];
ages.push(27);

//console.log(ages); // [26, 43, 21, 27] this works 

//-----------------------------------------------------

const person = {
  name: 'radu',
  age: '27'
}

person.age = 28;

//console.log(person); // Object {name: "radu", age: 28} this also works 

//-----------------------------------------------------

/*
const a = [1,2,3]; 

Value of a = "Pointer to some place in memory which holds [1,2,3]"

a = [4,5,6]  => Error as we try to change the value of a, the Pointer.

a.push(4);  => No error, as this directly accesses the array stored in memory, 
                the value of a (the Pointer), stays untouched.

basic types are passed by value, ALL OTHER by reference 
*/