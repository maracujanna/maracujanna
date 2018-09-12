// CLICK MENU
$(document).ready(function() {

    $(".icon").on("click", function(){
        $("body").toggleClass("open frezzed");
    });

    $(window).on('resize', function() {
        if ($('body').hasClass('open')) {
            $("body").removeClass("open frezzed");
        }
    });

    $(".btn-projs").on("click", function(){
        $("body").toggleClass("sidebar-open frezzed");
        if ($('body').hasClass('sidebar-open')) {
            $(".btn-projs").html("Fechar");
        } else {
            $(".btn-projs").html("Projetos");
        }
    });
    $("#cortina").on("click", function(){
        $("body").toggleClass("sidebar-open frezzed");
        if ($('body').hasClass('sidebar-open')) {
            $(".btn-projs").html("Fechar");
        } else {
            $(".btn-projs").html("Projetos");
        }
    });

});


// === BTN SCROLL UP
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

