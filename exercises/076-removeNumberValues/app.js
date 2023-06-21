let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (pair of Object.entries(obj)){
        typeof(pair[1]) === "number" ? delete obj[pair[0]] : 0
    }
    
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }