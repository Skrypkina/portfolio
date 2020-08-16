// import "@babel/polyfill";
import "./styles/styles.css";
import "./styles/main.scss";

("use strict");

// slider
const slides = document.querySelectorAll("[ data-slides ]");
const prevStep = document.querySelector("[ data-prev ]");
const nextStep = document.querySelector("[ data-next ]");
const dots = document.querySelectorAll("[ data-dots ]");

prevStep.addEventListener("click", handlePrevBtnClick);
nextStep.addEventListener("click", handleNextBtnClick);

//================================
class Slider {
  constructor(options) {
    this.slideArray = options.slideArr;
    this.dotArray = options.dotArr;
    this.currentIdx = options.currentIdx;
  }
  hide() {
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
    this.slideArray.forEach((slide) => {
      if (slide !== this.slideArray[this.currentIdx]) {
        slide.style.display = "none";
      }
    });
  }
  showNextSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx++;
    if (this.currentIdx > this.slideArray.length - 1) {
      this.currentIdx = 0;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showPrevSlide() {
    this.dotArray[this.currentIdx].classList.remove("active");
    this.slideArray.forEach((slide) => (slide.style.display = "none"));
    this.currentIdx--;
    if (this.currentIdx < 0) {
      this.currentIdx = slider.slideArray.length - 1;
    }
    this.slideArray[this.currentIdx].style.display = "block";
    this.dotArray[this.currentIdx].classList.add("active");
  }
  showSlides() {
    return setInterval(() => {
      this.showNextSlide();
    }, 3000);
  }
}

const slider = new Slider({
  slideArr: [...slides],
  dotArr: [...dots],
  currentIdx: 0,
});
slider.hide();
const intervalId = slider.showSlides();

function handlePrevBtnClick() {
  clearInterval(intervalId);
  slider.showPrevSlide();
}

function handleNextBtnClick() {
  clearInterval(intervalId);
  slider.showNextSlide();
}

//================================

// mobile menu

const menuOpenBtn = document.querySelector("[data-menu-open]");
const menu = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
const btn = document.querySelector("[data-link]");
console.log(btn);

menuOpenBtn.addEventListener("click", handleOpenBtnClick);
btn.addEventListener("click", handleBtnClick);

function handleOpenBtnClick() {
  const expanded =
    menuOpenBtn.getAttribute("aria-expanded") === "true" || false;
  menuOpenBtn.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("is-open");
  nav.classList.toggle("is-open");
}

function handleBtnClick() {
  console.log("yes");
}
