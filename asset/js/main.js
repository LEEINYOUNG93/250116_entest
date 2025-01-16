$(document).ready(function () {
    "use strict";
    AOS.init();
    initialize();

    function initialize() {
        header();
        mainVisual();
        textAni();
        btnAni();
        mainProduct();
        rolling();
        copyElements();
    }

    function header() {
        updateHeaderClass();

        $(window).on('scroll', updateHeaderClass);

        function updateHeaderClass() {
            var curr = $(window).scrollTop();
            if (curr > 50) {
                $('.header').addClass('scrolled');
            } else {
                $('.header').removeClass('scrolled');
            }
        }
    }

    function mainVisual() {
        var swiper = new Swiper(".swiper.main-slide", {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            autoHeight: true,
            navigation: {
                nextEl: ".swiper.main-slide .swiper-button-next",
                prevEl: ".swiper.main-slide .swiper-button-prev",
            },
        });
    }

    function textAni() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".mask-text li", {
            scrollTrigger: {
                trigger: ".section__about",
                start: "top 80%",
                end: "bottom 20%",
                toggleClass: { targets: ".section__about", className: "active" },
                markers: false,
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.5,
        });
    }

    function btnAni() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".btn-link", {
            scrollTrigger: {
                trigger: ".section__list",
                start: "top 80%",
                end: "bottom 20%",
                toggleClass: { targets: ".btn-link", className: "active" },
                markers: false,
            },
            duration: 0.5,
        });
    }

    function mainProduct() {
        var swiper = new Swiper(".swiper.product-slide", {
            loop: true,
            slidesPerView: 1.6,
            spaceBetween: 10,
            fadeEffect: {
                crossFade: true,
            },
            autoHeight: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.6,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                576: {
                    slidesPerView: 2.6,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 3.6,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5.6,
                    spaceBetween: 30,
                },
            },
        });
    }

    function rolling() {
        var $wrap = $(".rolling");
        var $list = $(".rolling ul");
        let wrapWidth = $wrap.width();
        let listWidth = $list.width();
        var speed = 100;

        let $clone = $list.clone();
        $wrap.append($clone);
        roll();

        function roll() {
            if (listWidth < wrapWidth) {
                var listCount = Math.ceil((wrapWidth * 2) / listWidth);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }
            $wrap
                .find("ul")
                .css({ animation: `${listWidth / speed}s linear infinite rolling` });
        }
    }

    function copyElements() {
        $('[data-copy]').each(function () {
            var $element = $(this);
            var copyCount = parseInt($element.data('copy'), 10);

            for (var i = 1; i < copyCount; i++) {
                var $clone = $element.clone();
                $clone.attr("data-copy", "");
                $element.after($clone);
            }
        });
    }
});

$(window).on('load', function() {
    AOS.init({
        duration: 1000, 
        once: false,   
    });
});
