(function () {
  const navSwipeBtn = document.querySelector(".nav__swipe-btn");
  const navSwipeBtnIcon = document.querySelector(".nav__swipe-btn");
  const unvisibleList = document.querySelector(".nav__list--li-unvisible");

  navSwipeBtnIcon.addEventListener("click", () => {
    navSwipeBtn.classList.toggle('visible-list')
  });

  navSwipeBtn.addEventListener("click", () =>{
    unvisibleList.classList.toggle('unvisible')
  });

})();
