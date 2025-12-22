/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(".section, .info-card, .stat, .spec-box");

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= ADD REVEAL CLASS STYLES ================= */
const style = document.createElement("style");
style.innerHTML = `
  .section,
  .info-card,
  .stat,
  .spec-box {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.9s cubic-bezier(.19,1,.22,1);
  }

  .show {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

/* ================= CARD HOVER DEPTH ================= */
document.querySelectorAll(".info-card, .spec-box").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `
      translateY(-10px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* ================= HERO PARALLAX ================= */
const hero = document.querySelector(".about-hero");

window.addEventListener("mousemove", e => {
  if (!hero) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 6;
  const y = (e.clientY / window.innerHeight - 0.5) * 6;

  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});


const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
