function removeOddValues(obj) {
    // your code here
    for (items of Object.entries(obj)){
        items[1]%2 != 0 ? delete obj[items[0]] : 0;
    }

}


let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }