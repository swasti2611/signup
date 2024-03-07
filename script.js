let btn = document.getElementById("btn");
let emailId = document.getElementById("email")
let form=document.getElementById("form")
let errorPass=document.getElementById("error-pass")
let errorEmail=document.getElementById("error-email")
let goodMsg=document.getElementById("goodmsg")
function validateEmail() {
 let emailValue=emailId.value;
   console.log(emailValue)
   if(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")){
    errorEmail.classList.toggle("error")
    return true;
   }
   
}

function validatePassword() {
    let PasswordId=document.getElementById("Password")
    let errorPass=document.getElementById("error-pass")
    let PassVal= PasswordId.value;
    if(PassVal.length >= 8){
        errorPass.classList.toggle("error")
        return true
    }
}


btn.addEventListener('click', (e) => {
    
    e.preventDefault(); // Prevent form submission by default
        
    var emailValid = validateEmail();
    var passValid = validatePassword();

    if (emailValid && passValid) {
        goodMsg.style.display = "block";
      
      errorEmail.style.display = "none";
       errorPass.style.display = "none";

        if (confirm("Are you sure you want to sign up?")) {
            alert("Successful signup!");
        } else {
            // Redirect to the same page and clear input values
            window.location.reload();
        }
    } else {
        alert("Please correct the errors in the form.");
    }
    
      

});

