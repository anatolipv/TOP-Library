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

