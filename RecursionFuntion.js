//recursion function: ek function jo apnay under hi call horaha ho usko recursion function kehtay hn

//lexical function: lexical function {}-block-scope kay under hi access hosakta ho example (local variable = lexical function)

//closure function:  ek function kay under jo dusra function ho, usko call krna mean closure function

// try catch


//recursion function: ek function jo apnay under hi call horaha ho usko recursion function kehtay hn
// recursion function
const hellouser = () => {
    const input = prompt("enter your name!")

    if (!input) hellouser() // recursion function q kay apnay hi function m call horaha h
    else console.log(`hello ${input}`);
        
}

// hellouser()

//recursion function: ek function jo apnay under hi call horaha ho usko recursion function kehtay hn
// recursion function
const counter = (n) => {
  console.log(n);

  if (n > 1) counter(n - 1) // function call here this is called recursion function
    else console.log("value is 0");
    
}
// counter(5)


//lexical function: lexical function {}-block-scope kay under hi access hosakta ho example (local variable = lexical function)
// lexical function
const greet = "hello js" // global variable / global scope

function func1(){
    console.log(greet);

    const msg1 = "js town";
    console.log(msg1);
    
    
}

// func1() // hello js , js town
// console.log(msg1); // undefine aiga q k msg1 variable lexical h mean local variable function block/scope h function kay bahar access nhi ho sakta



