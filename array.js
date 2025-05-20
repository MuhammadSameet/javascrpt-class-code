
var friends = ["sameet", "taha", "anus"];
var user = prompt("find your friends")

if (user == friends[0] ||
    user == friends[1] ||
    user == friends[2]) {
    console.log("friend found succesfull")
}
else {
    console.log("friend not found")
}

console.log(friends)
console.log(friends)
console.log("sameet")



var skills = ["html", "css", "java"]
var bioData = ["sameet", 21 , "male", "abc company", skills]
var input = prompt("find user")

console.log(bioData)
console.log(bioData[4][0])


if (skills == bioData[4]) {
    
    if (input == skills[2]) {
        console.log("access found")
    }
    else {
        console.log("access not found")
    }

}
else {
    console.log("not found")
}