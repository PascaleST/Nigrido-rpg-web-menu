// ================================
// App state
// ================================
let currentLanguage = "en";

// ================================
// Translations
// ================================
const translations = {
  en: {
    menu: {
      lore: "Lore",
      party: "Party",
      media: "Media"
    },
    lore: {
      title: "Lore",
      text: "A dark and intimate project born from intensity, chaos, and transformation."
    },
    party: {
      title: "Party",
      text: "Members and roles."
    },
    media: {
      title: "Media",
      text: "Music, visuals and live performances."
    },
    common: {
      back: "Back"
    }
  },

  es: {
    menu: {
      lore: "Lore",
      party: "Integrantes",
      media: "Multimedia"
    },
    lore: {
      title: "Lore",
      text: "Un proyecto oscuro e íntimo nacido de la intensidad, el caos y la transformación."
    },
    party: {
      title: "Integrantes",
      text: "Miembros y roles."
    },
    media: {
      title: "Multimedia",
      text: "Música, visuales y presentaciones en vivo."
    },
    common: {
      back: "Volver"
    }
  }
};

// ================================
// Language handling
// ================================
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = getTranslation(key);
    if (value) el.textContent = value;
  });
}

function getTranslation(key) {
  return key.split(".").reduce((obj, k) => obj?.[k], translations[currentLanguage]);
}

// ================================
// Screen navigation (SPA)
// ================================
function changeScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

// ================================
// Event listeners
// ================================
document.addEventListener("DOMContentLoaded", () => {

  // Language buttons
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Menu navigation
  document.querySelectorAll("[data-screen]").forEach(el => {
    el.addEventListener("click", () => {
      changeScreen(el.dataset.screen);
    });
  });

  // Init
  setLanguage(currentLanguage);
  changeScreen("menu");

  console.log("Nigrido RPG Menu initialized");
});
