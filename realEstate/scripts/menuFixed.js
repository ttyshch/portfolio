var containerPadding = 600;
$(window).scroll(function(){

    var top  = $(this).scrollTop();
    var header = $('.menu');

    if(top > containerPadding) {
        header.addClass('menuFixed');
    }else{
        header.removeClass('menuFixed');
    };
});