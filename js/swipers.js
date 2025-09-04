const visualSwiper = new Swiper(".visual-main", {
  autoplay: {
    delay: 7000,
  },
  loop: true,
  touchEventsTarget: "container",
});

const albumSwiper = new Swiper(".album-section", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: "50%",
    depth: 200,
    slideShadows: false
  },
});

const reviewSwiper = new Swiper(".review-section", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: true
      },
    },
    601: {
      slidesPerView: 2,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: true
      },
    },
    769: {
      slidesPerView: 3.5,
      navigation: {
        enabled: false,
      },
      pagination: {
        enabled: false,
      },
    }
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-disabled",
  },
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "swiper-pagination-bullet-active"
  },
});