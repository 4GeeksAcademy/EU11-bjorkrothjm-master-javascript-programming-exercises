function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (num1%2 === 0 || num2%2 === 0) ? true : (num1 === 7 && num2 === 7);
    
}

let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

let output2 = isEitherEvenOrAreBoth7(2, 3);
console.log(output2); // --> true