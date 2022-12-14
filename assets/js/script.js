"use strict";

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// element disable function
const elementDisableFunc = function (elem) {
  elem.classList.remove("active");
};

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

//toggle is clickable
const toggleNavButton = document.querySelector(".toggle-nav-button");
const navbar = document.querySelector(".navbar");
const navbar_list = document.querySelector(".navbar-list");
const header = document.querySelector(".header");

toggleNavButton.addEventListener("click", (e) => {
  elementToggleFunc(navbar);
  elementToggleFunc(toggleNavButton);
});

//hide navbar on click in phone-mode
const navbar_link = document.querySelectorAll(".navbar-link");

for (const navbar_link0 of navbar_link) {
  navbar_link0.addEventListener("click", (e) => {
    elementDisableFunc(navbar);
    elementDisableFunc(toggleNavButton);
  });
}

// hide navbar on scroll
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY & !toggleNavButton.classList.contains("active")) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

//dark and lightmode
const toggleDarkButton = document.querySelector(".toggle-dark-button");
const currentTheme = localStorage.getItem("theme");
const body = document.querySelector("body");

if (currentTheme == "dark") {
  document.body.classList.add("dark");
}

toggleDarkButton.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    var theme = "dark";
  } else {
    var theme = "";
  }
  // save theme to localStorage
  localStorage.setItem("theme", theme);
});