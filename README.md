# Slick-Dots-Like-Instagram-Slider
A solution to have instagram dots in a slick slider.

## Usage
Add to your head jquery, slick, slick-custom-dots with their respective css files as in the example of the index.html file

### JS Custom Functon
Call the function slick Slider (slider, settings), it accepts two parameters: slider and settings.

#### Example
var slider = $('.slick-slider');
var settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, // IMPORTANT
        focusOnSelect: true,
        infinite: false, // IMPORTANT
    }

slickSlider(slide, settings);