$(document).ready(function () {
    //owl-carousel
    $('.site-main .projects-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    //sticky-nav
    let nav_offset_top = $('.header_area').height()+20;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});