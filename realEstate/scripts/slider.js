function sliderNew(sSelector) {
    var element = $(sSelector),
        currentSlide = 1,
        lastSlide = $('.imageSlider').length;

    this.buttonPrev = element.find('.buttonPreview');
    this.buttonNext = element.find('.buttonNext');

    this.showPrev = function () {

        if (currentSlide === 1) {
            currentSlide = lastSlide;
        } else {
            currentSlide -= 1;
        }
        $('.sliderImages').css('top', '-' + 35.54 * (currentSlide - 1) + 'em');
    };

    this.showNext = function () {
        if (currentSlide === lastSlide) {
            currentSlide = 1;
        } else {
            currentSlide += 1;
        }
        $('.sliderImages').css('top', '-' + 35.54 * (currentSlide - 1) + 'em');
    };

    this.buttonPrev.click(this.showPrev);
    this.buttonNext.click(this.showNext);
};