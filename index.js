// Q1
// var array = ["sameet", 1, 2 ,3 , True , False]

// Q2
// var network = ["ufone", "zong", "jazz", "warid"]
// var array = [ network]


// Q3
// var education = ["ssc", "hsc", "bcs", "bs"]
// console.log(education)

// Q4 to be continue
// console.log("Top Movies of 2015");


// var cartoon = []
// cartoon.push("Avenger: Age of Ultron")
// cartoon.push("spectre")
// cartoon.push("Jurassic world")
// cartoon.push("Inside out")
// // console.log(indexof.cartoon);
// // indexof(cartoon)

// // console.log("lenght of the array :", cartoon.length);

// var animals = [cartoon]
// console.log(animals.indexOf(cartoon) ,cartoon);

// Q5
// var collection = ['audi', 'volvo', 'ford', 'lamborgani']

// console.log(collection);


// console.log('first index of array:', collection.indexOf("audi"));
// console.log('car first index of array:', collection[0]);
// console.log('last index of array:', collection.indexOf("lamborgani"));
// console.log('car at last index of array:', collection[3]);


// Q6
// var students = ["sameet", 'taha', 'kushnoor']
// var score = [320 , 480, 230]

// console.log('Score of', students[1],'is',score[1] , 'Percentage:', score[1] / 500 * 100,"%");
// console.log('Score of', students[2],'is',score[1] , 'Percentage:', score[2] / 500 * 100,"%");
// console.log('Score of', students[0],'is',score[0] , 'Percentage:', score[0] / 500 * 100,"%");

// Q7 (a)
var colors = ['blue', 'white', 'black']
console.log(colors);
// (a)
// var user = prompt("what color do want to add beggining in array")
// colors.unshift(user)
// console.log(colors);
// // (b)
// var user2 = prompt("what color do want to add last in array")
// colors.push(user2)
// console.log(colors);
// // (c)
// colors.unshift("purple", "offwhite")
// console.log(colors);
// // (d)
// colors.shift()
// console.log(colors);
// // (e)
// colors.pop();
// console.log(colors);
// (f)
// var user3 = prompt("enter color name:")
// var user4 = +prompt("color index number")
// colors.splice(user4 , 0, user3);
// console.log("check",colors);
// (g)
var user3 = prompt("enter color name:")
var user4 = +prompt("color index number")
colors.splice(user4 , 0, user3);
console.log("check",colors);