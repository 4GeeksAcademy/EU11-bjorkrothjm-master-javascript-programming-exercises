function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    return (num1%2 === 0 || num2%2 === 0) ? true : (num1 <9 && num2 <9);
    return (num1%2 === 0 || num2%2 === 0) ? true : (num1 === 7 && num2 === 7);


}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

let output2 = isEitherEvenAndLessThan9(72, 2);
console.log(output2); // --> false