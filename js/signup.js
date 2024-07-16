const togglePassword1 = document.getElementById("togglePassword")
const togglePassword2 = document.getElementById("togglePassword2")
const createPassword = document.getElementById('createPassword')
const loginPassword = document.getElementById('loginPassword')

togglePassword1.addEventListener('click', () =>{
    
    // toggle the type attribute
    const type = createPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    createPassword.setAttribute('type', type);
       // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash')

})
togglePassword2.addEventListener('click', () =>{
    
    // toggle the type attribute
    const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPassword.setAttribute('type', type);
       // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash')

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
