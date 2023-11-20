$('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    cssEase: 'linear'
});

window.addEventListener('scroll', function() {
    var scroll = this.document.querySelector('.back-to-top');
    scroll.classList.toggle("active", window.scrollY > 500);
})

function backToTop() {
    window.scrollTo( {
        top: 0
    })
}