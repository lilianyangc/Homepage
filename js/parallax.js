$(window).scroll(function(){
    parallax();
})

function parallax(){

    var wScroll = $(window).scrollTop(); //gets the number of scrol length from the top towards the bottom
    // console.log(wScroll); check the length of scroll

    $('.parallax--bg').css('background-position','center '+(wScroll*0.25)+'px')

    $('.parallax--box').css('top',-5+(wScroll*0.005)+'em')

}
