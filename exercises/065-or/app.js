function or(expression1, expression2) {
  // your code here
  //return (expression1 === true || expression2 === true)
  return expression1 === true 
    ? true 
    : expression2 === true
      ? true 
      : false
}

let output = or(true, false);
let output2 = or(false, true);
console.log(output); // --> true;
console.log(output2); // --> true;