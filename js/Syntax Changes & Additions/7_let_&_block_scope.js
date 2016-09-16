if(true){
  // var is not block scope
  var nameVar = 'radu';
}

//console.log(nameVar); // radu

//-----------------------------------------------------

if(true){
  // let has block scope
  let nameLet = 'radu';
}

//console.log(nameLet) // nameLet is not defined 

//-----------------------------------------------------

let nameLet = 'Burebista';

if(true){
  // let has block scope
  let nameLet = 'radu';
}

//console.log(nameLet) // Burebista 
