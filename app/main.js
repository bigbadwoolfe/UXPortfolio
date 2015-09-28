if ($(window).width() <768)
    $('#body').addClass("sticky");


$(window).on("resize", function() {
    if ($(window).width() < 768)
        $('#body').addClass("sticky");
    else {
        if ($(window).scrollTop() <= 50) {
            $('#body').removeClass("sticky");
        }
    }

});

$(window).scroll(function() {
    if ($(window).width() < 768)
        return;

    if ($(this).scrollTop() > 50){
        $('#body').addClass("sticky");
    }
    else {
        $('#body').removeClass("sticky");
    }
});


setTimeout(function() {
$("#body").css('opacity', 1);
}, 2000);

$(window).on('hashchange', function() {
    window.scrollTo(0,0);
});