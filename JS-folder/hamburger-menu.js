const toggleMenu = () => {
  const menuBtn = document.querySelector(".menu-swipe");
  const navUlListUnvisible = document.querySelector(".nav-ul-list-unvisible")
  menuBtn.classList.toggle("visible");
  navUlListUnvisible.classList.toggle("unvisible")
};

