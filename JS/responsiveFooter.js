"use strict";

(function () {
    const textBtns = document.querySelectorAll(".footer__infoHeading");
  
    textBtns.forEach(button => {
      button.addEventListener('click', function () {
        const parentItem = button.closest('.footer__info');
        const list = parentItem.querySelector('.footer__list');
        list.classList.toggle('active');
      });
    });
  })();