document.addEventListener("DOMContentLoaded", () => {

    console.log("Navbar & Services page loaded");
  
    /* ================= MARQUEE ================= */
    const marquee = document.querySelector(".marquee");
  
    if (marquee) {
      marquee.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
      });
  
      marquee.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
      });
    }
  
    /* ================= HAMBURGER MENU ================= */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("active");
      });
    }
  
    /* ================= CLOSE MENU ON LINK CLICK (MOBILE) ================= */
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
      });
    });
  
  });
  