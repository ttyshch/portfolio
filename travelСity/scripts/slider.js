function b_slider(sSelector) {
    var element = $(sSelector),
        currentSlide = 1,
        lastSlide = $('.b-slide__image').length;

    this.arrowPrev = element.find('.b-buttons__button_prev');
    this.arrowNext = element.find('.b-buttons__button_next');


    this.showPrev = function () {

        if (currentSlide === 1) {
            currentSlide = lastSlide;
        } else {
            currentSlide -= 1;
        }

        $('.b-slide').css('top', '-' + 347 * (currentSlide - 1) + 'px');
    };

    this.showNext = function () {
        if (currentSlide === lastSlide) {
            currentSlide = 1;
        } else {
            currentSlide += 1;
        }

        $('.b-slide').css('top', '-' + 347 * (currentSlide - 1) + 'px');
    };


    this.arrowPrev.click(this.showPrev);
    this.arrowNext.click(this.showNext);
}

