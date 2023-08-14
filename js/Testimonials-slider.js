let prev = document.getElementById('Testimonials-slider-prev')
let next = document.getElementById('Testimonials-slider-next')
$('.Testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: prev,
    nextArrow: next
});