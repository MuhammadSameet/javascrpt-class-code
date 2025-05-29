// for (var i = 0; i < 10; i++) {
//     console.log(i) // 1-9
// };

// for (i = 1 ; i <= 10; i++){
//     console.log(i) //1-10
// };


// for (i = 1; i <= 12; i++){
    //     console.log(i)
    
    //     if (i == 6){ // ab ya sirf 6 tak run hoga
    //         break
    //     }
    // };



var item = ['chips', 'cake', 'snaks', 'chocolate', 'biscuits']
// var userinput = prompt("what do you want to eat")

// if (item.indexOf(userinput) !== -1) {
//     console.log(userinput, "is available in our bakery at index no ", item.indexOf(userinput));
    
// }
// else {
//     console.log(userinput, 'is not avaibale in our bakery');
    
// }


for ( var i = 0 ; i <= item.length; i++){
    console.log(i);
};



// 29/5/25 class


// Q1
// for (var i = 1; i <= 5 ; i ++) {
//     console.log(i, "Hello World");
// };

// Q2
// for (var i = 1; i <= 10 ; i ++) {
//     console.log(i)
// };

// Q3
// lenght = +prompt("enter lenght of multipication table")
// number = prompt("enter the number")

// for (let i = 1; i <= lenght; i++) {
//     console.log(number, "*", i, "=" ,i * number);
// };

// Q4
// A = ['Nokia', 'Sony', 'Apple', 'Samsung', 'Huawei']
// for (var i = 0; i <= A.length -1 ; i++){
//     console.log(A[i]);
// };

// Q5
// fruits = ['apple', 'mango', 'banana', 'oranga', 'strawberry']

// for (var i = 0; i <= fruits.length -1 ; i++){
//     console.log(fruits[i]);
// };

// for (var i = 0; i <= fruits.length -1 ; i++){
//     console.log("Elements at index", i , "is", fruits[i])
// };

// Q6
number = +prompt("Enter total numbers of items: ")
items = []

console.log("number of items:", number)
console.log("items:")

for (var i = number; i > 0; i--){
    UserValue = prompt("enter the value of", i )
};
item.push(UserValue)

for (var i = 0; i <= items.length -1 ; i++){
    console.log(items[i]);
};





