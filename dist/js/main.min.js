$(document).ready(function () {
    'use strict';

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    let slider = $('.slider');
    let reviewsSlider = $('.reviews-slider');

    slider.slick({
        dots: true,
        adaptiveHeight: true
    });

    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('video').each(function() {
            $(this).get(0).pause();
        });
    });

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
    });

    const slidesMediaQuery = window.matchMedia('(max-width: 999px)');

    function handleTabletChangeSlides(e) {
        if (e.matches) {
            reviewsSlider.slick('slickSetOption', 'slidesToShow', 1, false);
        } else {
            reviewsSlider.slick('slickSetOption', 'slidesToShow', 2, false);
        }
    }

    slidesMediaQuery.addEventListener('change', handleTabletChangeSlides);

    handleTabletChangeSlides(slidesMediaQuery);

    $('.slick-next').html("<svg width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<g clip-path=\"url(#clip0_3910_132)\">\n" +
        "<path d=\"M15.6795 10.5226L7.21806 19.8232C7.02237 20.0385 6.75377 20.1645 6.46185 20.1781C6.16994 20.1916 5.89099 20.091 5.67651 19.8947L4.99363 19.2705C4.54925 18.8638 4.51762 18.1707 4.9231 17.7251L12.0284 9.91505L4.23305 2.78805C4.01857 2.5918 3.89282 2.32276 3.87947 2.03028C3.8661 1.73747 3.96682 1.45792 4.16251 1.24248L4.78565 0.557867C4.9815 0.342583 5.24994 0.216532 5.54186 0.202987C5.83377 0.189442 6.11272 0.290095 6.3272 0.48634L15.6087 8.97182C15.8237 9.16869 15.9492 9.43905 15.9619 9.73205C15.976 10.0261 15.8757 10.3068 15.6795 10.5226Z\" fill=\"#076BFF\"/>\n" +
        "</g>\n" +
        "<defs>\n" +
        "<clipPath id=\"clip0_3910_132\">\n" +
        "<rect width=\"19.9396\" height=\"20\" fill=\"white\" transform=\"matrix(1 0 2.22607e-08 -1 0.138916 20)\"/>\n" +
        "</clipPath>\n" +
        "</defs>\n" +
        "</svg>\n");

    $('.slick-prev').html("<svg width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<g clip-path=\"url(#clip0_3910_126)\">\n" +
        "<path d=\"M5.32935 9.47742L13.7908 0.176819C13.9865 -0.0384587 14.2551 -0.164517 14.547 -0.178062C14.8389 -0.191607 15.1179 -0.0909537 15.3323 0.105292L16.0152 0.729469C16.4596 1.13622 16.4912 1.82934 16.0858 2.27487L8.98048 10.085L16.7758 17.212C16.9903 17.4082 17.116 17.6772 17.1294 17.9697C17.1427 18.2625 17.042 18.5421 16.8463 18.7575L16.2232 19.4421C16.0273 19.6574 15.7589 19.7835 15.467 19.797C15.1751 19.8106 14.8961 19.7099 14.6817 19.5137L5.40013 11.0282C5.18513 10.8313 5.05964 10.561 5.04692 10.268C5.03285 9.97387 5.13319 9.6932 5.32935 9.47742Z\" fill=\"#076BFF\"/>\n" +
        "</g>\n" +
        "<defs>\n" +
        "<clipPath id=\"clip0_3910_126\">\n" +
        "<rect width=\"19.9396\" height=\"20\" fill=\"white\" transform=\"matrix(-1 0 -2.22607e-08 1 20.87 0)\"/>\n" +
        "</clipPath>\n" +
        "</defs>\n" +
        "</svg>\n");

    $('.slick-dots').children().each(function () {
        this.firstChild.innerHTML = '';
    });

    const dotsMediaQuery = window.matchMedia('(max-width: 580px)');

    function handleTabletChangeDots(e) {
        if (e.matches) {
            reviewsSlider.slick('slickSetOption', 'dots', true, true);
            $('.slick-dots').children().each(function () {
                this.firstChild.innerHTML = '';
            });
        } else {
            reviewsSlider.slick('slickSetOption', 'dots', false, true);
            $('.slick-next').html("<svg width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<g clip-path=\"url(#clip0_3910_132)\">\n" +
                "<path d=\"M15.6795 10.5226L7.21806 19.8232C7.02237 20.0385 6.75377 20.1645 6.46185 20.1781C6.16994 20.1916 5.89099 20.091 5.67651 19.8947L4.99363 19.2705C4.54925 18.8638 4.51762 18.1707 4.9231 17.7251L12.0284 9.91505L4.23305 2.78805C4.01857 2.5918 3.89282 2.32276 3.87947 2.03028C3.8661 1.73747 3.96682 1.45792 4.16251 1.24248L4.78565 0.557867C4.9815 0.342583 5.24994 0.216532 5.54186 0.202987C5.83377 0.189442 6.11272 0.290095 6.3272 0.48634L15.6087 8.97182C15.8237 9.16869 15.9492 9.43905 15.9619 9.73205C15.976 10.0261 15.8757 10.3068 15.6795 10.5226Z\" fill=\"#076BFF\"/>\n" +
                "</g>\n" +
                "<defs>\n" +
                "<clipPath id=\"clip0_3910_132\">\n" +
                "<rect width=\"19.9396\" height=\"20\" fill=\"white\" transform=\"matrix(1 0 2.22607e-08 -1 0.138916 20)\"/>\n" +
                "</clipPath>\n" +
                "</defs>\n" +
                "</svg>\n");

            $('.slick-prev').html("<svg width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<g clip-path=\"url(#clip0_3910_126)\">\n" +
                "<path d=\"M5.32935 9.47742L13.7908 0.176819C13.9865 -0.0384587 14.2551 -0.164517 14.547 -0.178062C14.8389 -0.191607 15.1179 -0.0909537 15.3323 0.105292L16.0152 0.729469C16.4596 1.13622 16.4912 1.82934 16.0858 2.27487L8.98048 10.085L16.7758 17.212C16.9903 17.4082 17.116 17.6772 17.1294 17.9697C17.1427 18.2625 17.042 18.5421 16.8463 18.7575L16.2232 19.4421C16.0273 19.6574 15.7589 19.7835 15.467 19.797C15.1751 19.8106 14.8961 19.7099 14.6817 19.5137L5.40013 11.0282C5.18513 10.8313 5.05964 10.561 5.04692 10.268C5.03285 9.97387 5.13319 9.6932 5.32935 9.47742Z\" fill=\"#076BFF\"/>\n" +
                "</g>\n" +
                "<defs>\n" +
                "<clipPath id=\"clip0_3910_126\">\n" +
                "<rect width=\"19.9396\" height=\"20\" fill=\"white\" transform=\"matrix(-1 0 -2.22607e-08 1 20.87 0)\"/>\n" +
                "</clipPath>\n" +
                "</defs>\n" +
                "</svg>\n");
        }
    }

    dotsMediaQuery.addEventListener('change', handleTabletChangeDots);

    handleTabletChangeDots(dotsMediaQuery);

    let timeInput = $('#time-input');

    timeInput.change(function () {
        timeInput.css('color', '#ffffff');
    });

    $('.button.button-full').click(function () {
        $('.menu')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.button.button-transparent').click(function () {
       $('.order')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.info-link-menu').click(function (e) {
        e.preventDefault();
        $('.menu')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.info-link-halls').click(function (e) {
        e.preventDefault();
        $('.halls')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.info-link-order').click(function (e) {
        e.preventDefault();
        $('.order')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.info-link-contacts').click(function (e) {
        e.preventDefault();
        $('.footer')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.info-link-reviews').click(function (e) {
        e.preventDefault();
        $('.reviews')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.header-logo').click(function (e) {
        e.preventDefault();
        $('.content')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.footer-logo').click(function (e) {
        e.preventDefault();
        $('.content')[0].scrollIntoView({behavior: 'smooth'});
    });

    $('.burger-menu a').click(function (e) {
        e.preventDefault();
    });

    let nameInput = $('#name-input');
    let phoneInput = $('#phone-input');
    phoneInput.mask('+7 (000) 000-00-00');

    let correctPhone = false;

    let button = $('.form-action');
    let loader = $('.loader-block');

    $('.button.button-order').click(function () {
        if (!nameInput.val()) {
            $('#name-error-message').show();
            nameInput.css('border-color', '#d90000');
        } else {
            $('#name-error-message').hide();
            nameInput.css('border-color', '#ffffff');
        }

        if (!phoneInput.val()) {
            $('#phone-error-message').show();
            phoneInput.css('border-color', '#d90000');
            correctPhone = false;
        } else {
            $('#phone-error-message').hide();
            if (phoneInput.val().length !== 18) {
                phoneInput.css('border-color', '#d90000');
                $('#phone-incorrect-error-message').show();
                correctPhone = false;
            } else {
                phoneInput.css('border-color', '#ffffff');
                $('#phone-incorrect-error-message').hide();
                correctPhone = true;
            }
        }

        if (timeInput.val() === null) {
            $('#time-error-message').show();
            timeInput.css('border-color', '#d90000');
        } else {
            $('#time-error-message').hide();
            timeInput.css('border-color', '#ffffff');
        }

        if (!!nameInput.val() && !!phoneInput.val() && timeInput.val() !== null && correctPhone) {
            loader.css('display', 'flex');
            button.hide();

            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: { name: nameInput.val(), phone: phoneInput.val(), time: timeInput.val() },
            })
                .done(function( msg ) {

                    if (msg.hasOwnProperty('success')) {
                        loader.css('display', 'none');
                        button.show();

                        if(msg.success === 1) {
                            $('.ordered-info-time span').text(timeInput.val());

                            $('form').hide();
                            $('.order-secondary-header').hide();
                            $('.ordered').show();
                        } else {
                            alert('Возникла ошибка при оформлении заказа!');
                        }
                    }
                });
        }
    });

    function getFormattedDate() {
        let date = new Date();
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let year = date.getFullYear().toString().slice(-2);
        return day + '.' + month + '.' + year;
    }

    $('.ordered-info-date span').text(getFormattedDate());

    $('.ordered-action a').click(function (e) {
        e.preventDefault();
        nameInput.val(null);
        phoneInput.val(null);
        timeInput.val('unselected');
        timeInput.css('color', '#969696');

        $('form').show();
        $('.order-secondary-header').show();
        $('.ordered').hide();
    });


    let burgerMenuBlock = $('.burger-menu-block');

    $('.burger-menu').click(function (e) {
        e.preventDefault();
        burgerMenuBlock.css('display', 'flex');
        $('body').css('overflow', 'hidden');

        if (burgerMenuBlock.css('display') === 'flex') {
            $('.burger-menu-container').css('transform', 'translateX(-210px)');
        }

        $('.burger-menu-action a').click(function (e) {
            e.preventDefault();
            burgerMenuBlock.css('display', 'none');
            $('body').css('overflow', 'auto');
            $('.burger-menu-container').css('transform', 'translateX(210px)');
        });

        $('.burger-menu-link a').click(function (e) {
            e.preventDefault();
            burgerMenuBlock.css('display', 'none');
            $('body').css('overflow', 'auto');
            $('.burger-menu-container').css('transform', 'translateX(210px)');
        });
    });

    $('.footer-rights span').text(new Date().getFullYear());


});