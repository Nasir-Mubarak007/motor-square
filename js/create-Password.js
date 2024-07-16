const togglePassword1 = document.getElementById('togglePassword1')
const togglePassword2 = document.getElementById('togglePassword2')
const confirmPassword = document.getElementById('confirmPassword')
const  passConfirm = document.getElementById('passConfirm')
const passDone = document.getElementById('passDone')
const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specialC = document.getElementById("specialC");
const confirm2 = document.getElementById('confirm2')


// When the user clicks on the password field, show the message box
myInput.addEventListener('focus', ()=>{
    document.getElementById("message1").style.display = "block";
})
confirmPassword.addEventListener('focus', ()=>{
  document.getElementById("message2").style.display = "block";
})

// When the user clicks outside of the password field, hide the message box
myInput.addEventListener('blur', ()=>{
    document.getElementById("message1").style.display = "none";
})

confirmPassword.addEventListener('blur', ()=>{
  document.getElementById("message2").style.display = "none";
})
// When the user starts to type something inside the password field

myInput.addEventListener('keyup', () =>{

     // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // validate special character
  var special = /[!@#$%^&*_=+-]/g;
                            
    if (myInput.value.match(special)) {
     specialC.classList.remove("invalid");
    specialC.classList.add("valid");
    } else {                           
     specialC.classList.remove("valid");
    specialC.classList.add("invalid");
 }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
})
 


confirmPassword.addEventListener('keyup', () =>{
  var first = myInput.value;
  var second = confirmPassword.value;
  if (first == second) {
    confirm2.classList.remove("invalid");
    confirm2.classList.add("valid");
    passDone.addEventListener('click', () =>{
      passConfirm.style.display = "block";})
  } else {
    confirm2.classList.remove("valid");
    confirm2.classList.add("invalid");
  }
})


togglePassword1.addEventListener('click', () =>{

  const type = myInput.getAttribute('type') === 'password' ? 'text' : 'password';
  myInput.setAttribute('type', type);
  // this.classList.toggle('fa-eye-slash')
})

togglePassword2.addEventListener('click', () =>{

  const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  confirmPassword.setAttribute('type', type);
  // this.classList.toggle('fa-eye-slash')
})


window.addEventListener('click', (e) =>{
    if (e.target === passConfirm ) {
        passConfirm.style.display = "none";
      }
})

//Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
 slidesPerView: 1,
 grabCursor: true,
 freeMode: true,
 direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction:false,
    pauseOnMouseEnter:false
  },
  loop:true
});