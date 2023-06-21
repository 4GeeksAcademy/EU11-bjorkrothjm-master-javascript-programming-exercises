// Write your function here

const getAverageOfElementsAtProperty = (obj, key) => {

    
    if (obj[key] === false || obj[key].length === 0){
        return 0
    }
    
    counter = 0
    const out = obj[key].reduce( (total, item) =>{
        console.log(total, item)
        counter += 1
        return total + item
    } ,0)
    return out/counter

}

let obj = {
    key: [1, 2, 3]
  };

  let output = getAverageOfElementsAtProperty(obj, 'key');
 console.log(output); // --> 2