import "./sass/style.scss";

("use strict");

// mobile menu button
const btn = document.querySelector("[ data-menu-button]");
const menu = document.querySelector("[ data-menu ]");
const mobileMenu = document.querySelector("[ data-mobile ]");
const hero = document.querySelector("[ data-hero-section ]");

btn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const expanded = btn.getAttribute("aria-expanded") === "true" || false;
  btn.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("is-open");
  hero.classList.toggle("is-open");
}

// styles for mobile-munu

// function handleBtnClick() {
//   const expanded = btn.getAttribute("aria-expanded") === "true" || false;

//   btn.classList.toggle("is-open");
//   btn.setAttribute("aria-expanded", !expanded);
//   mobileMenu.classList.toggle("is-open");
// }

// modal

const openBtn = document.querySelector("[ data-open-modal]");
const modalCloseBtn = document.querySelector("[ data-close-modal]");
const modalSubmitBtn = document.querySelector("[ data-submit-modal ]");
const backdrop = document.querySelector("[ data-backdrop ]");
const checkbox = document.querySelector("[ data-checkbox]");

openBtn.addEventListener("click", toggleModal);
checkbox.addEventListener("click", handleCheckboxClick);
modalCloseBtn.addEventListener("click", toggleModal);
modalSubmitBtn.addEventListener("click", toggleModal);

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  backdrop.style.transition = "opacity 500ms ease-in";
  if (!backdrop.classList.contains("is-hidden")) {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = "100%";
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}

function handleCheckboxClick() {
  modalSubmitBtn.classList.toggle("disabled");
  if (!modalSubmitBtn.classList.contains("disabled")) {
    modalSubmitBtn.removeAttribute("disabled");
  } else {
    modalSubmitBtn.setAttribute("disabled", "true");
  }
}
