function removeArrayValues(obj) {
    // your code here
    
    // // .constructor Solution
    // for (pair of Object.entries(obj)){
    //     pair[1].constructor === Array ? console.log(pair[1]) : 0;
    //     pair[1].constructor === Array ? delete obj[pair[0]] : 0;
    // }

    // Array.isArray() Solution
    for (pair of Object.entries(obj)){
        //Array.isArray(pair[1]) ? console.log(pair[1]) : 0;
        Array.isArray(pair[1]) ? delete obj[pair[0]] : 0;
    }
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }

  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }


 let obj2 = {
    "a": [3, 2,6,],
    "b": [ "let's", "rock"],
    "c": 55,
    "d": 13
}

removeArrayValues(obj2);
console.log(obj2); // --> { c: 55, d: 13 }