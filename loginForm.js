var emailEl = document.getElementById("email")
var passwordEl = document.getElementById("password")
var emailContent = document.createTextNode(emailEl).value
console.log(emailContent);

function loginFunc() {
    console.log(emailContent);
    
}