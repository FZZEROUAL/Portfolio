// ?Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

let images = [];
let currentIndex = 0;

function openModal(element) {
  const modal = document.getElementById("myModal");
  const imageContainer = document.getElementById("img01");

  // Récupère et initialise les images
  images = element.getAttribute('data-images').split(',').map(img => img.trim());
  currentIndex = 0;

  if (images.length > 0) {
    imageContainer.src = images[currentIndex];
    modal.style.display = "block";
  } else {
    console.error("Aucune image n'est disponible.");
  }
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function updateImage() {
  const imageContainer = document.getElementById("img01");
  if (images.length > 0) {
    imageContainer.src = images[currentIndex];
  }
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}
