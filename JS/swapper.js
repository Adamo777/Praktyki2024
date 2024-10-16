"use strict";

(function () {
    const firstSlide = document.querySelector(".section__first-slide");
    const secondSlide = document.querySelector(".section__second-slide");

    firstSlide.addEventListener("click", () =>{
      firstSlide.classList.toggle("unvisible-slide");
      secondSlide.classList.toggle("unvisible-slide");
    })

    secondSlide.addEventListener("click", () => {
      firstSlide.classList.toggle("unvisible-slide");
      secondSlide.classList.toggle("unvisible-slide");
    })

})();
