let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    counter = 0
    for (key of Object.keys(obj)){counter +=1};
    return counter
   
}
console.log(countNumberOfKeys(obj))


let obj2 = {
    a: 1,
    b: 2,
    c: 3
  };
  let output = countNumberOfKeys(obj2);
  console.log(output); // --> 3