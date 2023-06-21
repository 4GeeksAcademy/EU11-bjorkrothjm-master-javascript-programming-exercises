// Write your function here
const getElementsThatEqual10AtProperty = ((obj , key) => {
    if (obj[key] === undefined){ return []}
    if (Array.isArray(obj[key]) === false) {return []}

    const out = obj[key].filter( item => item === 10)
    return out 

})



let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]