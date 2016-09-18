const name = 'radu';
const age = 27;
let ageField = 'age';

const person = { 
  name, 
  [ageField]: age,
  'greet me'(){
    console.log( 'hello ' + this.name );
  }
};

//console.log(person);  // {name: "radu", age: 27} 
//person['greet me'](); // hello radu
//-----------------------------------------------------