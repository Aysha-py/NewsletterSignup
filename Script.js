const email = document.getElementById("email");
const subscribeForm = document.getElementById("subscribeForm");
const button = document.querySelector(".submit")
const warning = document.querySelector(".warning")
const feedback = document.querySelector(".success-message-container")
const Newsletter = document.querySelector(".NewsLettter-Container")
const dismiss = document.querySelector(".dismiss-btn")
let usermail = document.getElementById("usermail")
let emailValue = "";
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")



console.log(usermail.innerText)
button.addEventListener("click", function(event) {
  event.preventDefault(); 

    emailValue = email.value;
    function validateEmail(emailValue) {
					// Regular expression for email validation
					const emailPattern = /\S+@\S+\.\S+/;
					return emailPattern.test(emailValue);
        }
        function displayErrorMessage() {
          warning.textContent = "Valid email required";
          warning.style.color = "hsl(4, 100%, 67%)";
          email.style.backgroundColor = "rgba(252, 0, 0, 0.171)";
          email.style.border = "1px solid red";
          email.placeholder = "ash@loremcompany.com.";
        }

        
    if(emailValue === "" ){
     displayErrorMessage()
    } else if (emailValue && !validateEmail(emailValue)){
    displayErrorMessage()
    }else{
        
        feedback.classList.remove("hidden")
        Newsletter.classList.add("hidden")
        usermail.innerText =email.value
          warning.textContent = ""
          email.value=""
          email.style.backgroundColor = "white"
        
    }
      
});

dismiss.addEventListener("click",function(){
     feedback.classList.add("hidden")
       Newsletter.classList.remove("hidden")
})

close.addEventListener("click", ()=>{
  modal.style.display ="none"
 

})