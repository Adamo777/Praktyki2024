(function () {
  const div = document.querySelector(".header__panel--nav-swipe");
  const unvisibleList = document.querySelector(".nav__list--ul-unvisible");

  div.addEventListener("click", () => {
    div.classList.toggle('visible')
  });

  unvisibleList.addEventListener("click", () =>{
    unvisibleList.classList.toggle('unvisible')
  });

})();
