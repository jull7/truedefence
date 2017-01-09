$(document).ready(function () {
    $('.js-star-rating').starRating({
       activeColor: '#ffb430',
        emptyColor: '#dfdfdf',
        starSize: 18,
        useGradient: false,
        hoverColor: '#ff7f30'
    });

    $('.hide-description__btn').first().toggleClass('closed-v--blue');
    $('.hide-description__btn').first().toggleClass('opened-v--blue');
    $('.hide-description__btn').first().text('Hide details');


    $('.js-open-sibling').on('click', function () {
        var current = $(this);
        current.siblings('p').slideToggle();
        current.toggleClass('opened');
        current.toggleClass('closed');
    });

    $('.js-hide-description').on('click', function () {
        var current = $(this);
        if (current.text() == "Show details") {
            current.text("Hide details")
        } else {
            current.text("Show details")
        }
        current.siblings('.score-list').slideToggle();
        current.toggleClass('opened-v--blue');
        current.toggleClass('closed-v--blue');

    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.main-nav').slideToggle();
    });

    $('.js-open-popup').on('click', function () {
       $('.disclaimer>div').toggle();

    });
});