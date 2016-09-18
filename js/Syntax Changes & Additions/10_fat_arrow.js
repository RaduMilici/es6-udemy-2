const fn = () => {
  console.log('hello world');
}
//fn();

//-----------------------------------------------------

const returnFn = () => 'returns a value';
//console.log(returnFn()); // returns a value

//-----------------------------------------------------

const returnSingleArg = a => a + a;
//console.log(returnSingle(3)); // 6

//-----------------------------------------------------

const returnTwoArgs = (a, b) => a + b;
//console.log(returnTwoArgs(3, 14)); // 17

//-----------------------------------------------------

const callOther = (callback) => callback();
const callback = () => console.log('this was called');  
//callOther(callback);    

//-----------------------------------------------------

