const searchBtn = document.querySelector(".input-group .btn");
const searchPole = document.querySelector(".search-pole");

searchPole.addEventListener("focusin", () => {
    searchBtn.classList.toggle("op1");
});
searchPole.addEventListener("focusout", () => {
    searchBtn.classList.toggle("op1");
});

// ==================================

const burger = document.querySelector(".header__burger");
const popup1 = document.querySelector(".header__popup1");

burger.addEventListener("click", () => {
    popup1.classList.toggle("op1");
});


const spoilerHeader = document.querySelectorAll('.spoiler-header');
const spoilerArrow = document.querySelectorAll('.spoiler-arrow');
const spoilerContent = document.querySelectorAll('.spoiler-content');

for (let i = 0; i < spoilerHeader.length; i++) {
    spoilerHeader[i].addEventListener('click', function() {
        if (spoilerContent[i].style.display === 'none') {
          spoilerContent[i].style.display = 'block';
          spoilerArrow[i].classList.add('spoiler-arrow-down');
        } else {
          spoilerContent[i].style.display = 'none';
          spoilerArrow[i].classList.remove('spoiler-arrow-down');
        }
      });
}

