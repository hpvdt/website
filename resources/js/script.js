/* global $ */
/*eslint-env jquery*/

$('document').ready(function() {

    
    /* For the sticky navigation */
    $('.js--section-intro').waypoint(function(direction){
        if(direction =="down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');}   
    }, {
        offset:'80px;'
    });
    
    /* For the scroll buttons */
    $('.js--scroll-to-intro').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-intro').offset().top-50},1000);
    });
    
    /*-- Navigation Scroll --*/
    $('a[href*="#"]') // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) { // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
        // Figure out element to scroll to
        var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) { // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
          // Callback after animation // Must change focus!
          var $target = $(target);
                $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
        }}
    });
    
    /*-- Animation on scroll --*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });
    
    /*-- Mobile navigation --*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon')) {
            icon.addClass('ion-close');
            icon.removeClass('ion-navicon')
        } else {
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }});
})