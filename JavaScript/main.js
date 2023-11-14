// change navbar styles on the Scroll
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var windowScroll = window.scrollY > 0;
  navbar.classList.toggle("window-scroll", windowScroll);
});


// show/hide faq answer
const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () =>{
      faq.classList.toggle("open")

      //change icon
      const icon=faq.querySelector(".faq__icon i");
      if(icon.className === "uil uil-plus"){
          icon.className ="uil uil-minus";
      }
      else{
          icon.className ="uil uil-plus"; 
      }
  })
})


let slideIndex = 0;

function showSlides() {
const slides = document.getElementsByClassName("header__slide");
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {
  slideIndex = 1;
}
slides[slideIndex - 1].style.display = "flex";
setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function slidePrev() {
const slides = document.getElementsByClassName("header__slide");
slideIndex--;
if (slideIndex < 1) {
  slideIndex = slides.length;
}
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "flex";
}

function slideNext() {
const slides = document.getElementsByClassName("header__slide");
slideIndex++;
if (slideIndex > slides.length) {
  slideIndex = 1;
}
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "flex";
}

showSlides(); // Start sliding header automatically




