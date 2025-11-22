
// Smooth scroll handled by CSS behavior; add small offset for sticky nav when using anchors
// Improve anchor behavior so content doesn't hide under navbar
(function(){
const shiftWindow = () => {
if(location.hash) window.scrollBy(0, -80);
};
window.addEventListener('hashchange', shiftWindow);
window.addEventListener('load', shiftWindow);
})();


// Simple front-end contact handling
document.getElementById('contactForm').addEventListener('submit', function(e){
e.preventDefault();
const form = e.target;
const data = new FormData(form);
// Basic validation
if(!data.get('name') || !data.get('email') || !data.get('message')){
alert('Please fill name, email and message.');
return;
}
// For demo: show the data and clear form
alert('Message sent (demo). Thank you, ' + data.get('name') + '!');
form.reset();
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = target.offsetTop - 80; // navbar height
    window.scrollTo({ top: offset, behavior: "smooth" });
  });
});

// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');

// function showSlide(index) {
//   slides.forEach((s, i) => s.classList.toggle('active', i === index));
//   dots.forEach((d, i) => d.classList.toggle('active', i === index));
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     currentSlide = index;
//     showSlide(index);
//   });
// });

// setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentSlide = 0;
  let autoPlay = true;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // auto slide
  let slideTimer = setInterval(nextSlide, 3000);

  function stopAuto() {
    autoPlay = false;
    clearInterval(slideTimer);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAuto();
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  leftArrow.addEventListener("click", () => {
    stopAuto();
    prevSlide();
  });

  rightArrow.addEventListener("click", () => {
    stopAuto();
    nextSlide();
  });

  showSlide(currentSlide);
});
