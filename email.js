const input = document.querySelector(".input_email")
const button = document.querySelector(".button")
const image_error = document.querySelector(".image_error")
const form_error = document.querySelector(".form_error")

button.addEventListener("click",function(){

    if(input.value="" || input.value.indexOf('@')==-1 || input.value.indexOf('.')==-1){
        image_error.classList.add("active")
        form_error.classList.add("active")

        form.querySelector("input").setCustomValidity(" ");
        
    }

    else{
        image_error.classList.remove("active")
        form_error.classList.remove("active")
    }

})
