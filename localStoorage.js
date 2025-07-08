// data base ma wo information hogi jo loss hogaye tou masla na sanay
// javascript object coutation data
//string


var object = {
    id : 123,
    name : "sameet"
}

// object.fname = "shahid"
// delete object.fname

// console.log(object);
// console.log( object , typeof object);

var objectToStr = JSON.stringify(object)
var convertDataTostr = localStorage.setItem("user", objectToStr)
console.log(typeof objectToStr, objectToStr);


var objectStrToParse = JSON.parse(convertDataTostr)







// ek email passwrof login form with button
// password save local storage 
// save , get kahi or say krwao gay