"use strict";

const navigation = document.querySelector(".nav-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);
const hamburgerLine = hamburgerMenu.querySelectorAll("li");
console.log(hamburgerLine);
const links = navigation.querySelectorAll("a");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("nav-clicked");
  hamburgerLine.forEach((li) => {
    li.classList.toggle("toggle");
  });
});

links.forEach((links) => {
  links.addEventListener("click", () => {
    navigation.classList.toggle("nav-clicked");
    hamburgerLine.forEach((li) => {
      li.classList.toggle("toggle");
    });
  });
});
