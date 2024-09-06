new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween:40,
    speed:500,
    centeredSlides:true,
    slidesPerView: 1.5,
    // autoplay: {
    //     delay: 3000,
    // },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        500: {
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2.5

        },
        1024: {
            slidesPerView: 3
        },
    }

});