/* ================= SERVICES INTERACTION ================= */
const serviceCards = document.querySelectorAll(".service-card");
const serviceDetails = document.querySelectorAll(".service-detail");

const serviceMap = {
  "Civil Construction": "civil",
  "Electrical Works": "electrical",
  "Fabrication": "fabrication",
  "Structural Works": "structural",
  "Interior & Exterior": "interior"
};

// ✅ DEFAULT ACTIVE STATE FIX
serviceCards.forEach(card => {
  if (card.innerText.trim() === "Civil Construction") {
    card.classList.add("active");
  }
});

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    serviceCards.forEach(c => c.classList.remove("active"));
    serviceDetails.forEach(d => d.classList.remove("active"));

    card.classList.add("active");

    const targetId = serviceMap[card.innerText.trim()];
    const target = document.getElementById(targetId);

    if (target) {
      target.classList.add("active");
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================= PROJECT FILTER ================= */
const filterButtons = document.querySelectorAll(".project-filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

/* ================= LIGHTBOX ================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", (e) => {
    e.stopPropagation(); // ✅ FIX
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
