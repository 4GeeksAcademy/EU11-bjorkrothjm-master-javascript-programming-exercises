// Write your function here

const getFirstElementOfProperty = ((obj ,key) => {
    if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0){
        return undefined };
    return obj[key][0]

})


let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1