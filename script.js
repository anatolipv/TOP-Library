//pop up form START
const btnAdd = document.querySelector(".add");
const myForm = document.querySelector(".addNew-Form")
const form = document.querySelector("form");

function openForm(){
    myForm.style.display="flex";
}
function closeForm(){
    myForm.style.display="none";
}


btnAdd.addEventListener("click",()=>openForm());

myForm.addEventListener("click",function(e){
    e.stopPropagation();
    if(e.target == myForm)
        closeForm();
});

// pop up form END

// Book stuff

let myLybrary =[];




function Book () {
    this.title ="title",
    this.author = "author",
    this.pages= "0",
    this.readStatus = false;
}

function addBookToLibrary(a) {
    myLybrary.push(a);
}




function showBooksInLibrary(){
    for (let i = 0; i < myLybrary.length; i++) {
        displayBook(myLybrary[i]);
        
    }
}

// test books
let test1 = new Book();
test1.title="Harry Potter 1";
test1.pages="1000";
test1.author="JK Roling";
test1.readStatus=true;

let test2 = new Book();
test2.title="Harry Potter 1";
test2.pages="1000";
test2.author="JK Roling";
test2.readStatus=true;

addBookToLibrary(test1);
addBookToLibrary(test2);

// // console.log(myLybrary);

const btnSubmit = document.querySelector(".submit");
const inTitle   = document.querySelector("#title");
const inAuthor = document.querySelector("#author");
const inPages = document.querySelector("#pages");
const inStatus = document.querySelector("#read");


    

    
btnSubmit.addEventListener("click",()=>{
    let newBook= new Book();
    newBook.title = inTitle.value;
    newBook.author= inAuthor.value;
    newBook.pages = inPages.value;
    // newBook.readStatus=inStatus.value;
    addBookToLibrary(newBook);
    console.log(myLybrary);
    
});






function displayBook (a){

const content = document.querySelector(".content-holder")
const div = document.createElement("div");
const h5 = document.createElement("h5")
const h6 = document.createElement("h6");
const p = document.createElement("p")
const label =document.createElement("label")
const input = document.createElement("input");
const button =document.createElement("button")

button.classList.add("remove");
button.textContent="REMOVE FROM LIBRARY"


h5.textContent=a.title;
div.appendChild(h5);

h6.textContent=a.author;
div.appendChild(h6);

p.textContent=a.pages;
div.appendChild(p);

label.textContent="read";
input.setAttribute("type","checkbox");
label.appendChild(input);
div.appendChild(label);

div.appendChild(button);

div.classList.add("book-card");

content.appendChild(div);

}

showBooksInLibrary();


















