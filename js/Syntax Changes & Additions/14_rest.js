function sumUp(...toAdd){
  console.log(toAdd); // [1, 2, 3] because of the ... operator 
  let result = 0;

  for (var i = 0; i < toAdd.length; i++)  
    result += toAdd[i];    

  return result; 
}

//console.log( sumUp(1, 2, 3) ); 