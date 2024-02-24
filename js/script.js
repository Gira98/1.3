const showAll = document.querySelector(".s-more");

const resize = function () {
  if (showAll.textContent == "Показать все") {
    document.querySelector(".s-content__wrapper").classList.add("openMore");
    showAll.classList.add("hide");
    showAll.textContent = "Скрыть";
  } else {
    document.querySelector(".s-content__wrapper").classList.remove("openMore");
    showAll.classList.remove("hide");
    showAll.textContent = "Показать все";
  }
};
showAll.addEventListener("click", resize);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1.3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    340: {
      slidesPerView: 1.3,
    },
    360: {
      slidesPerView: 1.5,
    },
    450: { slidesPerView: 2 },
    550: { slidesPerView: 2.3 },
    570: { slidesPerView: 2 },
    650: { slidesPerView: 2.8 },
    700: { slidesPerView: 4 },
  },
});