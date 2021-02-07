$(document).ready(function(){

    //LOAD INSTAGRAM PHOTOS(AJAX) WITH SLICK
    var igToken = "YOUR INSTAGRAM TOKEN"; //YOUR INSTAGRAM TOKEN GOES HERE

    $.ajax({
        type: 'get',
        url: "https://graph.instagram.com/me/media?access_token="+igToken+"&fields=media_url,media_type,caption,permalink",
        success: function (response) {
            response.data.forEach((element, index) => {
                if (response.data[index].media_type != "VIDEO") {
                    $('.js-slick-slider').append(`
                        <div class="slide" style="background-image: url(' `+ response.data[index].media_url + `')">
                            <h3>`+ response.data[index].caption + `</h3>
                        </div>`);
                }
            });
    
            //SLICK CALL
            slickSlider($('.js-slick-slider'), {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                focusOnSelect: true,
                infinite: false,
                centerMode: true
            });
        }
    });
})

