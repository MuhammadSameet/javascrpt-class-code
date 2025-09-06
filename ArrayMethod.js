//1. filter() method 1 // fiiter array ki sahi value check krta h like ek array m 3 same value hn tou filter 3no valu return krta h
//2. find()method 2 ,find ko jaisay hi value milti ha wo dusri value check  hi nhi krta. 2 or 8 find ko 2 value mili wo 8 value ko check hi nhi kare ga 
//2. some()method 2 ,some same find jaisay kaam krta h ,some ko jaisay hi value milti ha wo dusri value check hi nhi krta. 2 or 8 some ko 2 value mili wo 8 value ko check hi nhi kare ga ,true or false ma answer dayta h 
//3. include()method 3 , include array ma value check krta h , true ya false ma answer dayda h
//4. at()method 4 , at(//index Value) at array ki index value check krta h
//5. findindex() array ki index value lakay ata h
//6. find()  
//6. some()  
//6. split()  
//6. joint()  
//6. findIndex()  
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



// 1. find()
// const arr = [1,2,3,4,8]

// const func = arr.find((item) => {
//     console.log(item);
//     return item % 2 == 0
//     // console.log(a);
// })

// console.log('res' , func); // 1 , 2 2 mila find funtion stop, answer is 2 , agay ki value check nhi krta, ya answer value ma sayta h

// 2. some()
// const arr = [1,2,3,4,8]

// const func = arr.some((item) => {
//     console.log(item);
//     return item % 2 == 0
//     // console.log(a);
// })

// console.log('res' , func); // 1 , 2 2 mila some funtion stop, answer is true , agay ki value check nhi krta, ya answer true and false ma dayta h

// 3. findIndex()
// const arr = [ [id=1] , [id=2], [id=3] , [id=4]]

// const func = arr.findIndex((item) => {
//     return item.id == 1
// })

// arr.splice(0, 3); strat value , kitni value say pehlay ki value delete krni ha wo VALUE/Number batao
// console.log(arr);


// findindex() array ki index value lakay ata h 

// // 4. split()
// const str = "welcome to karachi"
// const strToArray = str.split() // str ko array ma convert krdayga
// console.log(strToArray); //['welcome to karachi']
// const strToArray2 = str.split('') // cotations kay under kay gap kay hisab say array ko split/thor dayga
// console.log(strToArray2); //['w', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'k', 'a', 'r', 'a', 'c', 'h', 'i']
// const strToArray3 = str.split(' ') // cotations kay under kay gap kay hisab say array ko split/thor dayga
// console.log(strToArray3); // ['welcome', 'to', 'karachi']

// 5. join()
// const str = ['welcome' ,"to" ,'karachi']
// const strtoArr = str.join('') // join ma jo symbol ya value add kren join arr ko ussay jordayga
// console.log(strtoArr); //welcometokarachi
// const strtoArr2 = str.join(' ') // join ma jo symbol ya value add kren join arr ko ussay jordayga
// console.log(strtoArr2); //welcome to karachi
// const strtoArr3 = str.join(',') // join ma jo symbol ya value add kren join arr ko ussay jordayga
// console.log(strtoArr3); //welcome,to,karachi
// const strtoArr4 = str.join(' , ') // join ma jo symbol ya value add kren join arr ko ussay jordayga
// console.log(strtoArr4); //welcome , to , karachi
// const strtoArr5 = str.join('-') // join ma jo symbol ya value add kren join arr ko ussay jordayga
// console.log(strtoArr5); //welcome-to-karachi
// })


// console.log(filterfruits);

