const fruits = ['apple', 'banana', 'cherry'];


const obj = {
    uname : "john",
    email : "xyz@gmail.com",
    company : "Abc Company"
}

export default fruits // jab ek hi cheez export karni ho to default use karte hain
// import fruits from './file'
export { obj, fruits } // jab multiple cheezein export karni ho to curly braces use karte hain or sirf export use karte hain
// import { obj, fruits } from './file' // next file ma import asay hongi