let myImageSlider = new Swiper('.reviews', {
    navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev'
    },

    simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
    slideToClickedSlide: true,

    slidesPerView: 3,
    slidesPerGroup: 1,

    spaceBetween: 30,
    autoHeight: false,

    centeredSlides: false,
    initialSlide: 0,
    loop: true,
    freeMode: true,
    speed: 800,
    centeredSlides: true,


    effect: 'coverflow',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false
  },





});