const swapper = () => {
  const firstSlide = document.querySelector(".section__first-slide");
  const secondSlide = document.querySelector(".section__second-slide");

  firstSlide.classList.toggle("unvisible-slide");
  secondSlide.classList.toggle("unvisible-slide");
};
