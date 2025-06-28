// var str = "Ahmed";
// var maskData = '*'.repeat(5);
// var maskData = '*'.repeat(str.length);
// var maskData = str[0] + '*'.repeat(str.length - 1);
// var maskData = str[0] + '*'.repeat(str.length - 2) + str[str.length - 1];
// console.log(maskData);

// var accountNo = "1031-1188-010798-41-7";
// var maskData = accountNo.slice(0, 10) + '*'.repeat(6) + accountNo.slice(16);
// console.log(maskData);



// var heading1El = document.getElementById("heading_1");
// console.log(heading1El);

// var hasAtt = heading1El.hasAttribute("title");
// console.log(hasAtt);

// var getAtt = heading1El.getAttribute("title");
// console.log(getAtt);

// heading1El.setAttribute("class", "header-class");

// var attList = heading1El.attributes;
// console.log(attList);
// console.log(attList.length);

// var divEl = document.getElementById("container");
// var child_2 = divEl.children[1];
// divEl.removeChild(child_2);
// console.log(child_2);

// var h1El = document.createElement("h1");
// // console.log(h1El);

// var h1TextVal = document.createTextNode("ahmed");
// // console.log(h1TextVal);

// h1El.appendChild(h1TextVal);
// console.log(h1El);

// Note: Todo list app...!

var inputEl = document.getElementById("user-input");
var addBtnEl = document.getElementById("add-btn-el");
var listContainer = document.getElementById("list-container");

// Note: Edit item function...!
function editItem(listId) {
    var params = listId.toString();
    var listItem = document.getElementById(params);
    console.log(listItem.innerText);

    // inputEl.value = listItem.innerHTML;
};

// Note: Delete item function...!
function deleteItem(listId) {
    var params = listId.toString();
    var listItem = document.getElementById(params);
    listContainer.removeChild(listItem);
};

// Note: Add item function...!
function addItem() {
    var generateLiEl = document.createElement('li');
    var delBtnEl = document.createElement("button");
    var editBtnEl = document.createElement("button");

    var liTextVal = document.createTextNode(inputEl.value);
    var btnTextVal = document.createTextNode("Delete Item");
    var editBtnTextVal = document.createTextNode("Edit Item");


    var uId = Math.ceil(Math.random() * 50) + new Date().getTime().toString();
    // console.log(uId, typeof uId);
    
    delBtnEl.setAttribute("onclick", ("deleteItem(" + uId + ")"));
    editBtnEl.setAttribute("onclick", ("editItem(" + uId + ")"));
    generateLiEl.setAttribute("id", uId);

    delBtnEl.appendChild(btnTextVal);
    editBtnEl.appendChild(editBtnTextVal);
    generateLiEl.appendChild(liTextVal);
    generateLiEl.appendChild(delBtnEl);
    generateLiEl.append(editBtnEl);
    listContainer.appendChild(generateLiEl);

    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();

    console.log(document.getElementById(uId.toString()));
};
