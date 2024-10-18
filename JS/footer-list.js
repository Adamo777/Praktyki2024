"use strict";

(function () {
    const textBtns = document.querySelectorAll(".section__info-item-text");
  
    textBtns.forEach(button => {
      button.addEventListener('click', function () {
        const parentItem = button.closest('.section__info-item');
        const list = parentItem.querySelector('.section__info-list');
        list.classList.toggle('active');
      });
    });
  })();