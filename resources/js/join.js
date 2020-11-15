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
    // Get the modal
    
        var modal_general = document.querySelector('.modal-general')[0];
        var modal_electronics = $(".modal-electronics");

        // Get the buttons that opens the modals
        var btn_general = $(".js--btn-general");
        var btn_electronics = $(".js--btn-electronics");

        // Get the <span> element that closes the modal
        /*var span = $(".js--close-general");*/

        // When the user clicks on the button, open the modal
        btn_general.addEventListener('click', function(){
            modal_general.style.display = "block";
        });
    
        $(".js--btn-electronics").click(function() {
              $("#electronics-member").style.display = "block";
        });

        $('.btn-pageMenu').css('display','block');
    
    
        // When the user clicks on <span> (x), close the modal
         $('.js--close-general').click(function() {
          modal_general.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal_general) {
            modal_general.style.display = "none";
          }
        };
    

});