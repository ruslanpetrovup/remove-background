
const swiper = new Swiper('#hero', {
    slidesPerView: 1,
    spaceBetween: 1,
    speed: 400,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  })


  const swiper2 = new Swiper('#example', {
    slidesPerView: 1,
    spaceBetween: 1,
    speed: 400,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })
  const swiper3 = new Swiper('#gallery', {
    slidesPerView: 3,
    spaceBetween: 3,
    speed: 400,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })