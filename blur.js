$(window).scroll(function() {
    if($(document).scrollTop()>50) {
        $(".header-contatiner-resume").addClass("blur-header");
    }
    else {
        $(".header-contatiner-resume").removeClass("blur-header");
    }
});