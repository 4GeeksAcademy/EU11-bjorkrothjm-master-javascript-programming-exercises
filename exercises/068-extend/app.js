let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    const props1 = Object.keys(obj1);
    const props2 = Object.keys(obj2);
    //console.log(props1);

    const diff = props2.filter(item => !props1.includes(item));
    //console.log("Diff", diff);
    obj1[diff] = obj2[diff]
    return obj1 
    
}

// Adds the properties of the 2nd object to the first one.
extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}