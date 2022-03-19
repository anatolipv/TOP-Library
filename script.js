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

function Book (title,author,pages,readStatus) {
    this.title,
    this.author ,
    this.pages,
    this.readStatus;
}

function addBookToLibraryTest(a) {
    myLybrary.push(a);
}

function showBooksInLibrary(){
    const content = document.querySelector(".content-holder");
    content.textContent="";
    for (let i = 0; i < myLybrary.length; i++) {
        displayBook(myLybrary[i]);
        
    }
}


// test books
// let test1 = new Book();
// test1.title="Harry Potter 1";
// test1.pages="1000";
// test1.author="JK Roling";
// test1.readStatus=true;

// let test2 = new Book();
// test2.title="Harry Potter 2";
// test2.pages="1500";
// test2.author="JK Roling";
// test2.readStatus=true;

// let test3 = new Book();
// test3.title="Harry Potter 3";
// test3.pages="1500";
// test3.author="JK Roling";
// test3.readStatus=true;

// addBookToLibraryTest(test1);
// addBookToLibraryTest(test2);
// addBookToLibraryTest(test3);


function displayBook (a){

const content = document.querySelector(".content-holder");
const div = document.createElement("div");
const h5 = document.createElement("h5")
const h6 = document.createElement("h6");
const p = document.createElement("p")
const label =document.createElement("label")
const input = document.createElement("input");
const button =document.createElement("button")

button.classList.add("remove");
button.textContent="REMOVE FROM LIBRARY"
button.addEventListener("click",function(){
    myLybrary.splice(myLybrary.indexOf(a),1);
    showBooksInLibrary();
});

h5.textContent=a.title;
div.appendChild(h5);

h6.textContent=a.author;
div.appendChild(h6);

p.textContent=a.pages;
div.appendChild(p);

label.textContent="read status";
if(a.readStatus){
    input.checked=true;
}

else    {
    input.checked=false;
    div.classList.add("redborder");
}
input.addEventListener("change",()=>{
    if(input.checked){
        a.readStatus=true;
        div.classList.remove("redborder");}
    else
        {
            a.readStatus=false;
            div.classList.add("redborder");
        }
}) ;   
input.setAttribute("type","checkbox");
label.appendChild(input);
div.appendChild(label);

div.appendChild(button);

div.classList.add("book-card");

content.appendChild(div);

}

const submit = document.querySelector(".submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let inTitle = document.querySelector("#title");
    let inAuthor = document.querySelector("#author");
    let inPages = document.querySelector("#pages");
    let readStatus = document.querySelector("#read")

    if(inAuthor.value=="" || inTitle.value=="" || inPages.value=="")
        return false;
    else{
        let newBook = new Book()
        newBook.title=inTitle.value;
        newBook.author=inAuthor.value;
        newBook.pages=inPages.value;
        if(readStatus.checked)
            newBook.readStatus=true;
        else
            newBook.readStatus=false;
        // inTitle.value="";
        // inAuthor.value="";
        // inPages.value="";
        form.reset();
        addBookToLibraryTest(newBook);
        showBooksInLibrary();
        closeForm();
    }
});























