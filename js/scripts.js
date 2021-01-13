$(document).ready(function(){
    $('#mycarousel').carousel({
        interval: 4000000
    });    // this is not working, whereas if we set the data-interval attribute in mycarousel div, its working!
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa fa-pause');
            $('#carouselButton').children('span').addClass('fa fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa fa-play');
            $('#carouselButton').children('span').addClass('fa fa-pause');
        }
    });

    $('#login').click(function(){
        $('#loginModal').modal('show');
    });

});