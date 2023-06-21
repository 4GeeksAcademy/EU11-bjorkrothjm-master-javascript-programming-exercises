// Write your function here
const select = ((arr, obj) => {
    newObj = {}
    for (arrKey of arr){
        if ( (obj[arrKey] === false) || obj[arrKey] ===  undefined ) {
            continue
        }else{
            newObj[arrKey] = obj[arrKey];
        }
    }
    return newObj

})


let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }