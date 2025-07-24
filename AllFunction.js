
// functions
function func1() { //this is called named function
    console.log("sameet");
    
}

function func2(a , b = 1) { // Named function with default parameter
    console.log(a + b);
    
}

func1(10 , 10); 
func1(10); //by default b ki value 1 ho jayegi


const func3 = (a , b = 1) => { // this is called Arrow function
    console.log(a + b);
    
}

func1(10 , 10); 


const func4 = function() { // this is called Anonymous function
    console.log("Hello World");
}


function Func5(fruit1, fruit2, ...restParams) { // this is called rest parameter function
    // Jab bohot sara data function parameters mein lena ho tou 
    // 3 dots (...) ke sath koi bhi naam like "...restParams" use karte hain
    // Isay "rest parameter" kehte hain

    console.log(fruit1, fruit2);      // apple banana
    console.log(restParams);         // ['cherry', 'date', 'elderberry']
}

// ✅ Rest parameter example
Func5('apple', 'banana', 'cherry', 'date', 'elderberry');
