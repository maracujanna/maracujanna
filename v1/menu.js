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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}