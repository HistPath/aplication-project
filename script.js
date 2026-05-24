// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Saat hamburger diklik
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// =========================
// SMOOTH SCROLL
// =========================
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    // Ambil target section
    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    // Scroll halus
    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    // Tutup menu mobile setelah klik
    navMenu.classList.remove("active");
  });

});

// =========================
// ANIMASI SCROLL
// =========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  reveals.forEach(item => {

    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 100) {
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

// Jalankan sekali saat halaman dibuka
revealOnScroll();

// =========================
// FALLBACK GAMBAR
// =========================
const images = document.querySelectorAll("img");

images.forEach(image => {

  image.addEventListener("error", () => {

    image.src =
      "https://via.placeholder.com/400x300?text=Gambar+Belum+Ditambahkan";

  });

});