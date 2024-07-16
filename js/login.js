const loginPassword = document.getElementById("loginPassword");
const togglePassword = document.getElementById("togglePassword");


togglePassword.addEventListener("click", passwordVisible)


function passwordVisible(){

// toggle the type attribute
const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPassword.setAttribute('type', type);
   // toggle the eye slash icon
this.classList.toggle('fa-eye-slash')

} 

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
  