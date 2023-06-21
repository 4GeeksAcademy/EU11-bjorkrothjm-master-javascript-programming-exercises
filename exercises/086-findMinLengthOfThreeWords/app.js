// Write your function here

const findMinLengthOfThreeWords = ((w1, w2, w3) => {

    // SORT ARRAY + RETURN ONLY LENGTH
    const wordArray = [w1.length, w2.length, w3.length]
    const sortedArray  = wordArray.sort( (a,b) => {return a - b});
    return sortedArray[0]

    // SORT OBJECT + RETURN LENGTH + WORD
    // SORT + RETURN ONLY LENGTH
    const words = [
        {"word" : w1, "len": w1.length},
        {"word" : w2, "len": w2.length},
        {"word" : w3, "len": w3.length},
    ]

    const sortedWords = words.sort( (a, b) => (a.len - b.len))
    //return sortedWords[0].word + " " + sortedWords[0].len


})


let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

let output2 = findMinLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
console.log(output2);