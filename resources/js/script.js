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
            icon.removeClass('ion-navicon');
        } else {
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }});
    
    
    /*------Modal Join Page ----*/
    
    
        var btn_general = document.getElementById("btn-general");
        var btn_electronics = document.getElementById("btn-electronics");
    
    
    
    
    
        // Get the modal
        var modal_general = document.querySelector('.modal-general');
        var modal_electronics = document.querySelector('.modal-electronics');
        
    /*-----------open the modals-----*/
        btn_general.onclick = function(){
            modal_general.style.display = "block";
            
        };
    
        btn_electronics.onclick = function(){
            modal_electronics.style.display = "block";
        };
    
/*---------Close the modals--*/
        $('.js--close-general').click(function(){
            modal_general.style.display = "none";
        });        
    
        $('.js--close-electronics').click(function(){
            modal_electronics.style.display = "none";
        });
        
        
    
    
    
    /*
        // Get the buttons that opens the modals
        var btn_general = $(".js--btn-general");
        var btn_electronics = $(".js--btn-electronics");

        // Get the <span> element that closes the modal
        /*var span = $(".js--close-general");*/
/*
        // When the user clicks on the button, open the modal
        $(".js--btn-general").click(function() {
            modal_general.style.display = "block";
        });
    
        $(".js--btn-electronics").click(function() {
              $("#electronics-member").style.display = "block";
        });

        // When the user clicks on <span> (x), close the modal
         $('.js--close-general').click(function() {
          modal_general.style.display = "none";
        });
*/
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal_general) {
            modal_general.style.display = "none";
          }
        else if (event.target == modal_electronics) {
            modal_electronics.style.display = "none";
        }};
    
    
        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }

//carrousel slider
    /*
    new Splide( '#splide', {
        type      : 'loop',
        perPage   : 3,
        height    : '20rem',
        cover     : false,
        breakpoins: {
            640: {
                height: '6rem',
                }
        }
    } );
    
*/

    

    

});