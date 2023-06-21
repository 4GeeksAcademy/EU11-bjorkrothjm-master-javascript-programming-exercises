function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (key of Object.keys(obj)){
    obj[key].length > num ? delete obj[key] : 0
  } 
  
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);

console.log(obj); // { age: 20, location: 'Texas' }