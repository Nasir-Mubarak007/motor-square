const LinkBtn = document.getElementById('LinkBtn')
const linkModal = document.getElementById('linkModal')
const closeLinkBtn = document.getElementById('closeLinkBtn')


LinkBtn.addEventListener('click', () =>{
    linkModal.style.display = "block"
})

closeLinkBtn.addEventListener('click', () =>{
   window.location.href ="create-password.html"
})

window.addEventListener('click', (e) =>{
    if (e.target === linkModal) {
        linkModal.style.display = "none";
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
    