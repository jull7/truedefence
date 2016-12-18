$(document).ready(function () {
    $('.js-star-rating').starRating({
       activeColor: '#ffb430',
        emptyColor: '#dfdfdf',
        starSize: 18,
        useGradient: false,
        hoverColor: '#ff7f30'
        // readOnly: true
    });

    $('.js-open-sibling').on('click', function () {
        var current = $(this);
        current.siblings('p').slideToggle();
        current.toggleClass('opened');
        current.toggleClass('closed');

    });

    $('.js-hide-description').on('click', function () {
        var current = $(this);
        current.siblings('.score-list').slideToggle();
        current.toggleClass('opened-v--blue');
        current.toggleClass('closed-v--blue');

    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.main-nav').slideToggle();
    });
});