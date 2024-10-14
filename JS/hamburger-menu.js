(function () {
  const navSwipeBtn = document.querySelector(".nav__swipe-btn");
  const navSwipeBtnIcon = document.querySelector(".nav__swipe-btn");
  const unvisibleList = document.querySelector(".nav__list--ul-unvisible");

  navSwipeBtn.addEventListener("click", () => {
    navSwipeBtn.classList.toggle('visible')
  });

  unvisibleList.addEventListener("click", () =>{
    unvisibleList.classList.toggle('unvisible')
  });

})();
