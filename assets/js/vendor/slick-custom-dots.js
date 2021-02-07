//SLICK WITH DOTS LIKE INSTAGRAM FEATURE
function slickSlider(slider, slickInfo) {

    if (slider[0].childElementCount < 6) { //No feature under 6 dots
        var no = "no";
    }else{
        no = "";
    }

    function setBoundries(slick, state) {
        if (state === 'default') {
            slick.find('ul.slick-dots li').eq(4).addClass('n-small-1' + no + '');
        }
    }

    // Slick Selector.
    var slickSlider = slider;
    var maxDots = 4;
    var transformXIntervalNext = -18;
    var transformXIntervalPrev = 18;

    slickSlider.on('init', function (event, slick) {
        $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
        $(this).find('ul.slick-dots li').each(function (index) {
            $(this).addClass('dot-index-' + index);
        });
        $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
        setBoundries($(this), 'default');
    });

    var transformCount = 0;
    slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var totalCount = $(this).find('.slick-dots li').length;
        if (totalCount > maxDots) {
            if (nextSlide > currentSlide) {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1' + no + '')) {
                    if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1' + no + '')) {
                        transformCount = transformCount + transformXIntervalNext;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1' + no + '');
                        var nextSlidePlusOne = nextSlide + 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1' + no + '');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        var pPointer = nextSlide - 3;
                        var pPointerMinusOne = pPointer - 1;
                        $(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1' + no + '');
                        $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1' + no + '');
                    }
                }
            }
            else {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1' + no + '')) {
                    if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1' + no + '')) {
                        transformCount = transformCount + transformXIntervalPrev;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1' + no + '');
                        var nextSlidePlusOne = nextSlide - 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1' + no + '');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        var nPointer = currentSlide + 3;
                        var nPointerMinusOne = nPointer - 1;
                        $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1' + no + '');
                        $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1' + no + '');
                    }
                }
            }
        }
    });

    slider.slick(slickInfo);

}