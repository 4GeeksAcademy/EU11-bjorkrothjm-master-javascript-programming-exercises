function addToBackOfNew(arr, element) {
    // Write your function here
    const newArr = arr.slice(0, arr.length)
    newArr.push(element)
    return newArr    
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]