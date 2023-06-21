// function countCharacter(str, char) {
//     // your code here
//     const strArray = str.split("");
//     console.log(strArray);
//     console.log(typeof(strArray));
//     const initialValue = 0;
//     const sumOfArray = strArray.reduce( (total, item) => {
//         item === char ? console.log("Y") : console.log("No")
//         item === char ? total+1 : total
//     }, initialValue);
//     console.log(sumOfArray)
//     return sumOfArray
// }

// function countCharacter(str, char) {
//     // your code here
//     const strArray = str.split("");
//     console.log(strArray);
//     const totalen = 0;
//     strArray.forEach( (item) => {
//         console.log(item , char);
//         item === char ? console.log("Y") : console.log("No");
//         item === char ? totalen+=1 : totalen+=0;
//         //if (item === char){totalen += 1}
//     })
//     console.log(totalen)
//     return totalen
// }


/// ------  WORKING SOLUTIONS ------

// FOR LOOP
function countCharacter(str, char) {
    total = 0
    for (let i = 0; i<str.length; i++){
        if (str[i] === char){total += 1}
    }
    return total
}

FOR OF LOOP 
function countCharacter(str, char) {
    counter = 0
    for (item of str){
        if (item == char){
            counter += 1;
        } 
    }
    return counter
}


// forEach
function countCharacter(str, char) {
    myArray = str.split("")
    console.log(myArray);
    myCounter = 0
    myArray.forEach( item => {
        item === char ? console.log(true) : console.log(false); 
        item === char ? myCounter += 1 : myCounter += 0; 
        //console.log(myCounter)
    })
    return myCounter;
}

// FILTER 
function countCharacter(str, char) {
    const stringArray = str.split("")
    console.log(stringArray);
    const filteredArray = stringArray.filter( item => item === char)
    console.log(filteredArray);
    return filteredArray.length
}

// Reduce
function countCharacter(str, char) {
    const splittedArray = str.split("")
    console.log(splittedArray)
    const out = splittedArray.reduce( (total, item) => {
        return item === char ? total + 1 : total + 0;
    } , 0);
    return out
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3