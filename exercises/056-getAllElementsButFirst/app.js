function getAllElementsButFirst(array) {
  // your code here
  let newArr = array.slice(1, array.length)
  return newArr
  
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]