'use strict';

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active");}

// element disable function
const elementDisableFunc = function (elem) { elem.classList.remove("active");}


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
}

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
const toggleLink = document.querySelector(".toggle-box");
const navbar = document.querySelector(".navbar");
const navbar_list = document.querySelector(".navbar-list");
const navbar_link = document.querySelectorAll(".navbar-link");

toggleLink.addEventListener("click",e =>{
  elementToggleFunc(navbar_list);
  elementToggleFunc(navbar);
  elementToggleFunc(toggleLink)
});

//hide navbar on click in phone-mode
for (const navbar_link0 of navbar_link){
  navbar_link0.addEventListener("click",e =>{
    elementDisableFunc(navbar_list);
    elementDisableFunc(navbar);
    elementDisableFunc(toggleLink)
  });
}

// hide navbar on scroll
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () =>{
  if (lastScrollY < window.scrollY){
    navbar.classList.add("hidden")
  }
  else{
    navbar.classList.remove("hidden")
  }
  lastScrollY = window.scrollY
})