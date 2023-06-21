// Write your function here

const getElementsGreaterThan10AtProperty = ((obj, key) => {
    if (obj[key] ===undefined || Array.isArray(obj[key]) === false ){
        return [] };

    const filteredArr = obj[key].filter( item => item > 10)
    return filteredArr
})


let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]