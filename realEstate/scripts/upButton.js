$(document).ready(function(){

    $(window).scroll(function() {
	
        if ($(this).scrollTop() > 1)
        {
            $( ".upButton" ).fadeIn( "slow" );
        } else {
            $( ".upButton" ).fadeOut( "slow" );
        }
		
    });

    $('.upButton').click(function () {
	
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
		
    });
	
});