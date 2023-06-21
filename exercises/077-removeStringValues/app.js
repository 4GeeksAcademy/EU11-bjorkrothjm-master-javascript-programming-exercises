let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here

    // typeof() Solution
    for (pair of Object.entries(obj)){
        typeof(pair[1]) === "string" ? delete obj[pair[0]] : 0
    }
    
    
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
