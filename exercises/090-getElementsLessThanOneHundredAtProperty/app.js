// Write your function here

const getElementsLessThan100AtProperty = ((obj, key) => {
    if (obj[key] ===undefined || Array.isArray(obj[key]) === false ){
        return [] };


    const out = obj[key].filter( item => item<100)
    return out
} )





let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]