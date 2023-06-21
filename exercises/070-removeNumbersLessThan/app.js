let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for (key of Object.keys(obj) ){
        obj[key] < num ? delete obj[key] : 0
    }

    
}


  removeNumbersLessThan(5, obj);
  console.log(obj); // --> { a: 8, c: 'montana' }
