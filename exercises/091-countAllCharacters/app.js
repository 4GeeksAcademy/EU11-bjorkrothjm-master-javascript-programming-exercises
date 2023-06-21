// Write your function here
const countAllCharacters = ( (str) => {  
    const obj = {}  
    for (letter of str){
        console.log(letter)
        obj[letter] >= 1 
            ? obj[letter] += 1
            : obj[letter] = 1 
    }
    return obj
})



let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}