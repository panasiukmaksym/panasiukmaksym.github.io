// scripts on jQuery

$(function(){

    // hover effect on arrows at jq

    $('.work__wrapper').each(function(i){
        $(this).mouseover(function(){
            $($('.work__btn')[i]).css('margin-top', '8px');
        });
        $(this).mouseout(function(){
            $($('.work__btn')[i]).css('margin', '0px');
        });
    });

    // open cards at jq

    var active = [false, false, false, false, false, false];

    $('.work__btn').each(function(i){
        $(this).click(function(){
            $($('.work__link')[i]).css('transition', '0s').slideToggle(300, function(){
                $($('.work__text')[i]).css('transition', '0s').slideToggle(500, function(){
                    if ( active[i] == false ) {
                        $($('.work__arrow')[i]).css('transform', 'rotate(180deg)');
                        active[i] = true;
                    } else {
                        $($('.work__arrow')[i]).css('transform', 'rotate(0deg)');
                        active[i] = false;
                    }
                });
            });
        });
    });

    // phone menu

    $('.nav__hamb').click(function(){
        $('.overflou').addClass('overflou-active');
        setTimeout(function(){
            $('.menu').addClass('menu-active');
        }, 300);
    });

    $('.menu__close').click(function(){
        $('.menu').removeClass('menu-active');
        setTimeout(function(){
            $('.overflou').removeClass('overflou-active');
        }, 400);
    });

    $('.overflou').click(function(event){
        if ( event.currentTarget.classList[0] == 'overflou' ) {
            $('.menu').removeClass('menu-active');
        setTimeout(function(){
            $('.overflou').removeClass('overflou-active');
        }, 400);
        }
    });

    // change language

    if ( $('.about .title').text() == 'Про мене' ) {
        $('.language__ua').css('background', 'white').css('cursor', 'default');
        $('.language__ua a').css('text-decoration', 'none').css('cursor', 'default').css('color', 'black').click(function(e){
            e.preventDefault();
        });
    } else if ( $('.about .title').text() == 'Обо мне' ) {
        $('.language__ru').css('background', 'white').css('cursor', 'default');
        $('.language__ru a').css('text-decoration', 'none').css('cursor', 'default').css('color', 'black').click(function(e){
            e.preventDefault();
        });
    }

    // scroll up for button

    $('.up').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });

    // show button-up

    var heightWindow = document.documentElement.clientWidth / 2;

    $(window).scroll(function(){
        if ($(this).scrollTop() > heightWindow) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });

    // scroll down

    $('.first__pointer').click(function(){
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + 500
        }, 1000);
    });

    // fixed tools-card-text font-size when little window width

    $(window).resize( function(){
        if ( $(document).width() < 1200 ) {
            $('.tools__text, .tools__title').css({
                'font-size': '16px'
            });
        }
    });

    // add img-shadow hover effect on JS

    const techCard = document.querySelectorAll('.tech__card');
    const techImg = document.querySelectorAll('.tech__card img');
    const techTitle = document.querySelectorAll('.tech__title');
    const techText = document.querySelectorAll('.tech__text');

    techCard.forEach( (item, i) => {
        item.addEventListener('mouseover', function(event){
            item.style.background = 'black';
            techText[i].style.color = 'white';
            techTitle[i].style.color = 'orange';
            techImg[i].style.filter = 'drop-shadow(0px -5px 15px rgba(255, 255, 255, 0.5))';
        });
        item.addEventListener('mouseout', function(event){
            item.style.background = 'linear-gradient(214deg, rgba(0,255,214,0.4) 0%, rgba(255,2,2,0.4) 100%)';
            techText[i].style.color = 'black';
            techTitle[i].style.color = 'black';
            techImg[i].style.filter = 'none';
        });
    });

    const toolsCard = document.querySelectorAll('.tools__card');
    const toolsImg = document.querySelectorAll('.tools__card img');
    const toolsTitle = document.querySelectorAll('.tools__title');
    const toolsText = document.querySelectorAll('.tools__text');

    toolsCard.forEach( (item, i) => {
        item.addEventListener('mouseover', function(event){
            item.style.background = 'black';
            toolsText[i].style.color = 'white';
            toolsTitle[i].style.color = 'orange';
            toolsImg[i].style.filter = 'drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.5))';
        });
        item.addEventListener('mouseout', function(event){
            item.style.background = 'linear-gradient(214deg, rgba(0,255,214,0.4) 0%, rgba(255,2,2,0.4) 100%)';
            toolsText[i].style.color = 'black';
            toolsTitle[i].style.color = 'black';
            toolsImg[i].style.filter = 'none';
        });
    });

    // add info for myself show/hidden on js
    
    let aboutInside = document.querySelectorAll('.about *');
    aboutInside.forEach( item => {
        item.style.transition = 'none';
    });

    let activeAbout = false;

    let plusVerticalLine = document.querySelector('.about__vertical');
    plusVerticalLine.style.transition = '0.6s all';

    
    $('.about__plus').click( function() {
        $('.about__slider').slideToggle(1500);
        $('.about__add').slideToggle(1500, function(){
            if ( activeAbout == false ) {
                plusVerticalLine.style.opacity = '0';
                activeAbout = true;
            } else if ( activeAbout == true ) {
                plusVerticalLine.style.opacity = '1';
                activeAbout = false;
            }
        });
    });

    // different certificate width

    let certificate = document.querySelector('.about__certificate');
    let certificateButton = document.querySelector('.about__slide img');
    let certificateActive = false;
    certificate.style.transition = '0.6s all';
    certificateButton.style.transition = '0.6s all';
    certificateButton.addEventListener('click', function(){
        if ( certificateActive == false ) {
            certificate.style.width = '100%';
            certificateButton.style.transform = 'rotate(90deg)';
            certificateActive = true;
        } else {
            certificate.style.width = '40%';
            certificateButton.style.transform = 'rotate(-90deg)';
            certificateActive = false;
        }
    });

    //modal certificate

    let modalCertificate = document.querySelector('.about__modal');
    let imgCertificate = document.querySelector('.about__certificate img');
    modalCertificate.style.transition = '0.6s all';

    imgCertificate.addEventListener('click', function(){
        modalCertificate.style.display = 'flex';
    });

    modalCertificate.addEventListener('click', function(){
        modalCertificate.style.display = 'none';
    });

});