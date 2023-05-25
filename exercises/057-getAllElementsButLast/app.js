function getAllElementsButLast(array) {
    // your code here
    let newArr = array.slice(0, array.length-1)
    return newArr
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]