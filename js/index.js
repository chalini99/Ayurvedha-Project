// Smooth fade-in on load
document.querySelectorAll("section").forEach(sec=>{
    sec.style.opacity=0;
    sec.style.transform="translateY(30px)";
    setTimeout(()=>{
      sec.style.transition="0.8s ease";
      sec.style.opacity=1;
      sec.style.transform="translateY(0)";
    },200);
  });
  // SIMPLE SCROLL ANIMATION
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".hero-content, .about-section, .service-card, .testimonial-card, .cta"
).forEach(el => observer.observe(el));

// MOBILE MENU TOGGLE
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


