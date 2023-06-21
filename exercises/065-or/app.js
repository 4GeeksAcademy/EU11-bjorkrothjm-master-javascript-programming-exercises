function or(expression1, expression2) {
  // your code here
  //return (expression1 || expression2);
  return expression1 === true ? true : expression2 === true ? true : false;
}

let output = or(true, false);
console.log(output); // --> true;