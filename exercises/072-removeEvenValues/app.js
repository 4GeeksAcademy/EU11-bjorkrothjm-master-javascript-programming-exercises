function removeEvenValues(obj) {
    // your code here
    
    for (pair of Object.entries(obj)){
        //console.log(pair);
        pair[1]%2 === 0 ? delete obj[pair[0]] : 0
    }


    
}

let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }