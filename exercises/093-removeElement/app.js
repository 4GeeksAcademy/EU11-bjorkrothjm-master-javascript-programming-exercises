// Write your function here
const  removeElement = ((arr, discarder) => {
    

    const newArr = arr.filter( item => item != discarder);
    return newArr;
})



let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]