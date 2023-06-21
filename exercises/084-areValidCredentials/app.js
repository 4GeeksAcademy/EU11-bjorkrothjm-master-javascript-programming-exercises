// Write your function here
function areValidCredentials(username, password) {
    return (
        username.length <= 3
        ? false
        : password.length >= 8
            ? true
            : false
    )

}



let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true