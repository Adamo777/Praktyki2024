
const toggleMenu = () => {
  const menuBtn = document.querySelector(".nav__menu--swipe");
  const navUlListUnvisible = document.querySelector(".nav__list-unvisible")
  menuBtn.classList.toggle("visible");
  navUlListUnvisible.classList.toggle("unvisible")

};
