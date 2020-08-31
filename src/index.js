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
const closeBtn = document.querySelector("[data-close]");
const link = document.querySelector("[data-link]");

menuOpenBtn.addEventListener("click", handleOpenBtnClick);
closeBtn.addEventListener("click", handleCloseBtnclick);
link.addEventListener("click", handleCloseBtnclick);

function handleOpenBtnClick() {
  const expanded =
    menuOpenBtn.getAttribute("aria-expanded") === "true" || false;
  menuOpenBtn.setAttribute("aria-expanded", !expanded);
  menu.classList.add("is-open");
  nav.classList.add("is-open");
}
function handleCloseBtnclick() {
  const expanded =
    menuOpenBtn.getAttribute("aria-expanded") === "true" || false;
  menuOpenBtn.setAttribute("aria-expanded", !expanded);
  menu.classList.remove("is-open");
  nav.classList.remove("is-open");
}

//============================ form
const form = document.querySelector("[data-form]");
const name = document.querySelector("[data-name]");
const tel = document.querySelector("[data-tel]");
const nameError = document.querySelector(".name + span.error");
const telError = document.querySelector(".phone + span.tel-error");
const url = "https://jsonplaceholder.typicode.com/users";

//modal
const backdrop = document.querySelector("[data-backdrop]");
const modal = document.querySelector("[data-modal]");
const paragraph = document.querySelector("[data-paragraph]");
const closeModal = document.querySelector("[data-close-modal]");

form.addEventListener("submit", handleFormSubmit);
closeModal.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});
name.addEventListener("input", function (event) {
  if (name.validity.valid) {
    nameError.innerHTML = "";
    nameError.className = "error";
  } else {
    showError();
  }
});
tel.addEventListener("input", function (event) {
  if (tel.validity.valid) {
    telError.innerHTML = "";
    telError.className = "error";
  } else {
    showError();
  }
});

window.onclick = function (event) {
  if (event.target !== modal) {
    backdrop.classList.remove("is-open");
  }
};
//--------------------------------
function handleFormSubmit(evt) {
  evt.preventDefault();
  const dataToAdd = {
    postId: 500,
    email: "Sincere@april.biz",
  };
  const formData = new FormData(evt.currentTarget);
  formData.forEach((value, name) => {
    dataToAdd[name] = value;
  });

  if (!name.validity.valid) {
    showError();
    return;
  } else if (!tel.validity.valid) {
    showError();
    return;
  }

  fetch(url, {
    method: "POST",
    body: JSON.stringify(dataToAdd),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error while fetching " + response.statusText);
    })
    .then((data) => {
      console.log(data);
      backdrop.classList.add("is-open");
      paragraph.innerHTML = `${data.name}</br> спасибо за заказ. Наш менеджер свяжется с вами.`;
    })
    .catch((err) => console.log(err));

  form.reset();
}

function showError() {
  if (name.validity.valueMissing) {
    nameError.textContent = "Введите имя, пожалуйста.";
  } else if (tel.validity.valueMissing) {
    telError.textContent = "Введите телефон, пожалуйста.";
  } else if (name.validity.tooShort) {
    nameError.textContent = `Должно быть минимум ${name.minLength} буквы`;
  } else if (tel.validity.tooShort) {
    telError.textContent = `Должно быть минимум ${tel.minLength} цифр`;
  }
}
