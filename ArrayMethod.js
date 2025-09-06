//1. filter() method 1 // fiiter array ki sahi value check krta h like ek array m 3 same value hn tou filter 3no valu return krta h
//2. find()method 2 ,find ko jaisay hi value milti ha wo dusri value check  hi nhi krta. 2 or 8 find ko 2 value mili wo 8 value ko check hi nhi kare ga 
//2. some()method 2 ,some same find jaisay kaam krta h ,some ko jaisay hi value milti ha wo dusri value check hi nhi krta. 2 or 8 some ko 2 value mili wo 8 value ko check hi nhi kare ga ,true or false ma answer dayta h 
//3. include()method 3 , include array ma value check krta h , true ya false ma answer dayda h
//4. at()method 4 , at(//index Value) at array ki index value check krta h
//5. findindex() array ki index value lakay ata h

// includes
// var friuts = [ 'mango', 'apple', 'banana', 'orange', 'pineapple', 'strawberry', 'grape', 'watermelon', 'kiwi', 'pear' ];

// console.log(friuts.includes('mango')); // include array ki value check krta h true & false ma answer dayga

//at
// var friuts = [ 'mango', 'apple', 'banana', 'orange', 'pineapple', 'strawberry', 'grape', 'watermelon', 'kiwi', 'pear' ];
// var checkIndexWithOldMethod = friuts[2] // banana
// var checkIndexwithAt = friuts.at(2) // banana , this is a new method
// console.log(checkIndexWithOldMethod); // banana
// console.log(checkIndexwithAt); // banana


//filter
// var friuts = [ 'mango', 'apple', 'banana', 'orange', 'pineapple', 'strawberry', 'grape', 'watermelon', 'kiwi', 'pear' ];

// var filterfruits = friuts.filter(( eachfruit, index ) => {
//     return "fruit name + eachfruit + fruit index Number + index "
// })

// console.log(filterfruits);

//filter
// var friuts = [ 'mango', 'apple', 'banana',  'banana' , 'banana' , 'orange', 'pineapple', 'strawberry', 'grape', 'watermelon', 'kiwi', 'pear' ];

// var filterfruits = friuts.filter(( eachfruit, index ) => {
//     return eachfruit == "banana"; 
//     // return eachfruit == "apple"
//     // return eachfruit.startsWith("s")
// })

// console.log(filterfruits);

//find
// var friuts = [ 'mango', 'apple', 'banana', 'orange', 'banana' , 'banana' ,'pineapple', 'strawberry', 'grape', 'watermelon', 'kiwi', 'pear' ];

// var filterfruits = friuts.find(( eachfruit) => { //find ek value dayana ha agar us wohi value array ka 2 , ya 3 dafa ho tou bhi find ek hi dafa dhunta h or return krta ha dusri value ko dhunta nhi h
//     return eachfruit == "banana"; 
// })


// console.log(filterfruits);
