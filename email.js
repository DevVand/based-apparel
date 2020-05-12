/*document.getElementById("form").addEventListener("submit",function(){

    document.querySelector(".input_email").setCustomValidity(" ")

    const emailValue = document.querySelector(".input_email").value

    if(emailValue == "" || !isEmail(emailValue)){
        document.querySelector(".image_error").classList.add("active")
        document.querySelector(".form_error").classList.add("active") 
          alert("Error")  
    }
  
    else{
        document.querySelector(".image_error").classList.remove("active")
        document.querySelector(".form_error").classList.remove("active")

    }
})*/

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

validar = () => {
    document.querySelector(".input_email").setCustomValidity(" ")

    const emailValue = document.querySelector(".input_email").value

    if(emailValue == "" || !isEmail(emailValue)){
        document.querySelector(".image_error").classList.add("active")
        document.querySelector(".form_error").classList.add("active") 
          alert("Error")  
          return false
    }
  
    else{
        document.querySelector(".image_error").classList.remove("active")
        document.querySelector(".form_error").classList.remove("active")
        return true
    }
}