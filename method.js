var str = "sameetshahid"
console.log(str.toUpperCase()); // string ki value kay all character ko CAPITAL krdayga
console.log(str.toLowerCase());  // string ki value kay all character ko small-letter krdayga

var num = 125
console.log(num , typeof num);
var num1 = num.toString() // number ko string m aconvert kr diya
console.log(num1 , typeof num1);

var name1 = "character"
console.log(name1.indexOf("t")); // value ki index valuebatata h
console.log(name1.lastIndexOf("a")); // last wala index number bataye ga


var n = 123
console.log(n, typeof n);
var n = String(n) // number to string
console.log(n, typeof n);
var n = Number(n)
console.log(n, typeof n);


var nam = "sameetshahid"
console.log(nam.charAt(3)); // e , chatAt character ki index value layta h or us index vaule ki "value return krta h"

var rep = "world war world war"
console.log(rep);
console.log(rep.replace("world", "1st")); // replce sirf 1st value ko change krta ha dusri ya sari value ko change nhi krta
console.log(rep.replaceAll("world", "1st")); // replceAll sarivalues ko change krta ha paragrapg ya string ki