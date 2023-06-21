let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (key of Object.keys(obj)){
        obj[key] > num ? delete obj[key] : 0
    };
    
}


removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

let obj2 = {
    a: 8,
    b: 2,
    c: 'montana',
    d: 88,
    e: 99,
    f: 5
}

removeNumbersLargerThan(5, obj2);
console.log(obj2);