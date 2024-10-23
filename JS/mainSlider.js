(function () {
  const slides = document.querySelectorAll(".mainSlider__slide"); 
  const leftBtn = document.querySelector(".mainSlider__btn-left");
  const rightBtn = document.querySelector(".mainSlider__btn-right");
  let currentIndex = 0;
  let autoSlideInterval;

  const changeSlide = (direction) => {
    slides[currentIndex].classList.add("unvisible-slide");

    if (direction === "left") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else if (direction === "right") {
      currentIndex = (currentIndex + 1) % slides.length;
    }

    slides[currentIndex].classList.remove("unvisible-slide");
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      changeSlide("right");
    }, 7000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  leftBtn.addEventListener("click", () => {
    stopAutoSlide();
    changeSlide("left");
    startAutoSlide();
  });

  rightBtn.addEventListener("click", () => {
    stopAutoSlide();
    changeSlide("right");
    startAutoSlide();
  });

  startAutoSlide();
})();
