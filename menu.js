// console.log("hi");
$(document).ready(function() {
    $(".icon").on("click", function(){
        $("body").toggleClass("open frezzed");
        if ($('body').hasClass('open')) {
            $(".main-nav").animate({height: $(window).height()}, 600);
        } else {
            $(".main-nav").animate({height: "0px"}, 600);

        }

    });
});