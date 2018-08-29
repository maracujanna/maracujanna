// console.log("hi");
$(document).ready(function() {
    const   body = $('body'),
            mainNav = $(".main-nav"),
            iconMenuToggle = $(".icon");

    iconMenuToggle.on("click", function(){
        body.toggleClass("open frezzed");
        if (body.hasClass('open')) {
            mainNav.animate({height: $(window).height()}, 600);
        } else {
            mainNav.animate({height: "0px"}, 600);
        }

    });
});