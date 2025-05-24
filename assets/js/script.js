"use strict"; // Enforces stricter parsing and error handling in JavaScript

/**
 * PRELOAD
 * Shows a preloader until the entire page (including images) is fully loaded
 */

const preloader = document.querySelector("[data-preaload]"); // Select the preloader element using a data attribute

window.addEventListener("load", function () {
  preloader.classList.add("loaded"); // Add 'loaded' class to hide preloader
  document.body.classList.add("loaded"); // Add 'loaded' class to body for additional UI control
});

/**
 * Utility function to add event listeners to multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback); // Attach the event listener to each element
  }
};

/**
 * NAVBAR TOGGLING
 * Toggles the navbar and overlay visibility
 */

const navbar = document.querySelector("[data-navbar]"); // Navbar element
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); // Buttons that toggle the navbar
const overlay = document.querySelector("[data-overlay]"); // Overlay background

const toggleNavbar = function () {
  navbar.classList.toggle("active"); // Toggle 'active' class on navbar
  overlay.classList.toggle("active"); // Toggle 'active' class on overlay
  document.body.classList.toggle("nav-active"); // Toggle body state for potential scroll lock
};

addEventOnElements(navTogglers, "click", toggleNavbar); // Attach click listeners to all nav togglers

/**
 * HEADER & BACK TO TOP BUTTON
 * Shows/hides header and back-to-top button based on scroll position
 */

const header = document.querySelector("[data-header]"); // Header element
const backTopBtn = document.querySelector("[data-back-top-btn]"); // Back to top button

let lastScrollPos = 0; // Track previous scroll position

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY; // Check if user is scrolling down
  if (isScrollBottom) {
    header.classList.add("hide"); // Hide header when scrolling down
  } else {
    header.classList.remove("hide"); // Show header when scrolling up
  }
  lastScrollPos = window.scrollY; // Update scroll position
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active"); // Add active style when scrolling
    backTopBtn.classList.add("active"); // Show back to top button
    hideHeader(); // Determine whether to hide/show header
  } else {
    header.classList.remove("active"); // Reset header to initial state
    backTopBtn.classList.remove("active"); // Hide back to top button
  }
});

/**
 * HERO SLIDER
 * Manual and automatic image slider for the hero section
 */

const heroSlider = document.querySelector("[data-hero-slider]"); // Main slider container
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]"); // Individual slider items
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]"); // Previous button
const heroSliderNextBtn = document.querySelector("[data-next-btn]"); // Next button

let currentSlidePos = 0; // Index of the current slide
let lastActiveSliderItem = heroSliderItems[0]; // Reference to the previously active slide

// Updates slider's visible slide
const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active"); // Remove 'active' class from previous slide
  heroSliderItems[currentSlidePos].classList.add("active"); // Add 'active' to current slide
  lastActiveSliderItem = heroSliderItems[currentSlidePos]; // Update the last active slide
};

// Shows next slide
const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0; // Loop back to the first slide
  } else {
    currentSlidePos++; // Move to next slide
  }
  updateSliderPos(); // Update slider
};

heroSliderNextBtn.addEventListener("click", slideNext); // Event listener for next button

// Shows previous slide
const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1; // Loop to the last slide
  } else {
    currentSlidePos--; // Move to previous slide
  }
  updateSliderPos(); // Update slider
};

heroSliderPrevBtn.addEventListener("click", slidePrev); // Event listener for previous button

/**
 * AUTO SLIDE
 * Automatically cycles through the hero slider every 7 seconds
 */

let autoSlideInterval; // Holds the interval ID for clearing later

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext(); // Move to next slide every 7 seconds
  }, 7000);
};

// Stop auto sliding when user hovers on nav buttons
addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseover",
  function () {
    clearInterval(autoSlideInterval); // Pause auto-slide on hover
  }
);

// Resume auto sliding when mouse leaves nav buttons
addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseout",
  autoSlide // Restart auto-slide
);

// Start auto slide after page load
window.addEventListener("load", autoSlide);

/**
 * PARALLAX EFFECT
 * Moves background elements slightly based on cursor movement
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]"); // Select elements with parallax

let x, y; // Cursor positions for movement

window.addEventListener("mousemove", function (event) {
  // Normalize mouse position (range: ~ -5 to +5)
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // Reverse direction for parallax effect
  x = x - x * 2;
  y = y - y * 2;

  // Apply movement to all parallax elements
  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed); // Adjust based on speed
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`; // Move element
  }
});
