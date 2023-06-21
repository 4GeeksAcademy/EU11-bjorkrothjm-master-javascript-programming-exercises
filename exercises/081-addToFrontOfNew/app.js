function addToFrontOfNew(arr, element) {
    // Write your function here
    const newArr = arr.slice(0, arr.length)
    newArr.unshift(element)
    return newArr
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log("Output", output); // --> [3, 1, 2];
console.log("Input", input); // --> [1, 2]