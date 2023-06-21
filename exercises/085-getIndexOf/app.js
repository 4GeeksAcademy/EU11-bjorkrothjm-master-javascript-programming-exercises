// Write your function here
const getIndexOf = ((char, str) => {
    const ind = str.search(char)
    return ind
});


let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2