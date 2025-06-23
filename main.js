//sidebar functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
//scrolling functionality
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
//add to cart functionality
let cart = []; // Empty cart array

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".btn");

// Get cart count element
const cartCount = document.getElementById("cart-count");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product__card");
    const productName = productCard.querySelector("h4").textContent;
    const productPrice = productCard.querySelector("p").textContent;
    const productImage = productCard.querySelector("img").getAttribute("src");

    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
    };

    // Add product to cart
    cart.push(product);

    // Optional: Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count display
    cartCount.textContent = cart.length;

    // Optional: Notify user
    alert(`${productName} added to cart!`);
  });

});
//login form
document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('login-link');
  const loginModal = document.getElementById('login-modal');
  const closeLoginBtn = document.getElementById('close-login');
  const loginForm = document.getElementById('login-form');

  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'block';
  });

  closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    alert(`Welcome, ${username}! Login submitted.`);

    loginModal.style.display = 'none';
    loginForm.reset();
  });
});
