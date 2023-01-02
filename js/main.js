//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,

  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });
  var swiper3 = new Swiper(".autoplay", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  })
//Navigation bar effects on scroll

//Responsive navigation menu toggle