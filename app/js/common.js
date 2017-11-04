$(document).ready(function () {
	"use strict";
    /*Menu*/
    $(function(){
        $('.nav .m-menu-button').click(function(){
            $(this).toggleClass("close-mobile-button");
            $('.main-nav').fadeToggle(100);
        });
    });

	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        height: 500,
        loop: true
    });

	var swiper = new Swiper('.swiper-container-as-services', {
        slidesPerView: 5,
         nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 20,
         loop: true,
        breakpoints: {
			600: {
				slidesPerView: 1,
			},
            750: {
                slidesPerView: 2,
            },
			1000: {
				slidesPerView: 3,
			},
            1200: {
                slidesPerView: 4,
            }
		}
    });

    var swiper = new Swiper('.swiper-container-as-sertificat', {
        slidesPerView: 4,
         nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 20,
         loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            750: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            }
        }
    });

    // var swiper = new Swiper('.swiper-container-slog-services', {
    //     slidesPerView: 3,
    //      nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     paginationClickable: true,
    //     spaceBetween: 20,
    //     centeredSlides: true,
    //      loop: true,
    //     breakpoints: {
    //         600: {
    //             slidesPerView: 1,
    //         },
    //         900: {
    //             slidesPerView: 3,
    //         }
    //     }
    // });

});

