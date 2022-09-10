$(function(){

    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1040,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    $('.menu__close-icon').on('click', function(){
        $('.overflou').css('display', 'none');
    });

    $('.nav__menu').on('click', function(){
        $('.overflou').css('display', 'block');
    }); 

    $('.overflou').on('click', function(event){
        if (event.target.classList[0] == 'overflou') {
            $('.overflou').css('display', 'none');
        }
    });

});