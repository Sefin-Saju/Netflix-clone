window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav-bar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const profileIcon = document.querySelector(".profile");

profileIcon.addEventListener("click", () => {
  if (window.location.pathname.includes("portfolio.html")) {
    window.location.href = "index.html";
  } else {
    window.location.href = "portfolio.html";
  }
});


const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
