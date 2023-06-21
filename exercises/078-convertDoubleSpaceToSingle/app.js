function convertDoubleSpaceToSingle(str) {
    // your code here
    const myArr = str.split("  ")
    const myString = myArr.join(" ")
    return myString
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"