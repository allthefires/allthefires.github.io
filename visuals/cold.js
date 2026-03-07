// ========================================
// COLD GALLERY
// ========================================

document.getElementById("current-year").textContent = new Date().getFullYear();

const coldPhotos = [
  {
    file: "cold_pictures_web/varinia_cold_01.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_02.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_03.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_04.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_05.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_06.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_07.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_08.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_09.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_10.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_11.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_12.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_13.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_14.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_15.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_16.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_17.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_18.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_19.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_20.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_21.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_22.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_23.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_24.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_25.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_26.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_27.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_28.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_29.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_30.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_31.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_32.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_33.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_34.jpg",
    city: "Poland, Zakopane",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_36.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_37.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_38.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_39.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_40.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_41.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_42.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_43.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_44.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_45.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_46.jpg",
    city: "Poland, Warsaw",
    year: "2025",
  },
  {
    file: "cold_pictures_web/varinia_cold_47.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_48.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_49.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_50.jpg",
    city: "Austria, Stubai Glacier",
    year: "2022",
  },
  {
    file: "cold_pictures_web/varinia_cold_51.jpg",
    city: "Austria, Innsbruck",
    year: "2022",
  },
];

// Shuffle
coldPhotos.sort(() => Math.random() - 0.5);

// Build grid
const coldGrid = document.getElementById("coldGrid");

coldPhotos.forEach((photo) => {
  coldGrid.innerHTML += `
    <div class="cold-item">
      <div class="cold-item-inner">
        <img src="${photo.file}" alt="${photo.city}" loading="eager" />
      </div>
      <div class="cold-caption">
        <span class="cold-caption-city">${photo.city}</span>
        <span class="cold-caption-year">${photo.year}</span>
      </div>
    </div>
  `;
});

// Fade in on scroll
const coldItems = coldGrid.querySelectorAll(".cold-item");

const coldObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        coldObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);

coldItems.forEach((item) => coldObserver.observe(item));

// ========================================
// LIGHTBOX (DESKTOP ONLY)
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

// 1. FUNCIÓN PARA ABRIR (Solo Desktop)
document.getElementById("coldGrid").addEventListener("click", (e) => {
  // Fix: Si es móvil (menor o igual a 768px), no abrir lightbox
  if (window.innerWidth <= 768) return;

  const item = e.target.closest(".cold-item");
  if (!item) return;

  const img = item.querySelector("img");
  const city = item.querySelector(".cold-caption-city").textContent;
  const year = item.querySelector(".cold-caption-year").textContent;

  lightboxImg.src = img.src;
  lightboxCaption.textContent = `${city} ${year}`;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
});

// 2. FUNCIÓN PARA CERRAR
const cerrarLightbox = () => {
  if (lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }
};

// 3. EVENTOS DE CIERRE (Simplificado para Desktop)
lightbox.addEventListener("click", cerrarLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarLightbox();
});

// ========================================
// BACK TO TOP
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  },
  { passive: true },
);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
