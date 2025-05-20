// Q1
var a = +prompt("Enter the number: ")

if ( a % 3 == 0) {
    console.log("number is sucessfully divided by 3")
}
else {
    console.log("number is not divided by 3")
}

// Q2
var b = +prompt("Enter the number: ")

if (b % 2 == 0) {
    console.log("even number")
}
else {
   console.log("odd number")
}

// Q3
var c = +prompt("Enter the number: ")

if (c <= 18) {
    console.log("Too young")
}
else {
   console.log("old enough")
}


// Q4
var userName = prompt("Enter your good name:")

if (userName == "sameet" || userName == "muhammad") {
    console.log("greeting")
}

// // Q5
var d = +prompt("Enter the number: ")

if (d % 2 == 0) {
    console.log("number is not divided by 3")
}
else {
    console.log("number is divided by 3")
}





// Q7
number1 = +prompt("enter number one: ")
operator = prompt("chooice the operator: ")
number2 = +prompt("enter number Two: ")


if (operator == "+") {
    console.log(number1 + number2)
}

else if (operator == "-") {
    console.log(number1 - number2)
}

else if (operator == "*") {
    console.log(number1 * number2)
}

else if (operator == "/") {
    console.log(number1 / number2)
}

else if (operator == "%") {
    console.log(number1 % number2)
}

// Q8
time = +prompt("enter the time: ")

if (time >= 0 && time < 1200) {
    console.log("Good morning")
}

else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon")
}

else if (time >= 1700 && time < 2100) {
    console.log("Good evening")
}

else if (time >= 2100 && time <= 2359) {
    console.log("Good night")
}

// Q9
year = prompt("enter the year")

if (year == 2028 || year == 2032) {
    console.log("this is leap year")
}
else {
    console.log("this is not leap year")
}
