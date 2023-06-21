// Write your function here
const findMaxLengthOfThreeWords = ((w1, w2, w3) => {
    const wordArray = [w1.length, w2.length, w3.length] 
    sortedWords = wordArray.sort( (a, b) => a < b ? 1 : -1 )
    return sortedWords[0]

})

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3