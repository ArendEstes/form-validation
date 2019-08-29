const name = document.getElementById("name");
const mail = document.getElementById("mail");
const msg = document.getElementById("msg");
const submit = document.querySelector(".submit-button");
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector("form");


function checkInput(){
    if (  name.value.trim() && regEx.test(mail.value) && msg.value.trim() ){
        submit.style.background = "#fa923f";
        submit.disabled = false;
    }
    else {
        submit.style.backgroundColor = "#979695";
        submit.disabled = true;
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event);
})