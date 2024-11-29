// JavaScript Document

$(document).ready(function() {
    var distFromTop = 0;

    // Initial check on page load
    checkElements();

    // Check again on scroll
    $(window).scroll(function() {
        checkElements();
    });

    // Function to check all .descriptor elements
    function checkElements() {
        // Get current distance from top
        distFromTop = $(window).scrollTop();

        $(".descriptor").each(function() {
            main($(this));
        });
    }

    function main(el) {
        var elTop = el.offset().top;
        var elHeight = el.outerHeight();
        var windowHeight = $(window).height();

        // Adjusting the trigger zone based on the element's height
        var triggerStart = elTop - windowHeight * 0.5; // Start animation when half of the element enters the viewport
        var triggerEnd = elTop + elHeight - windowHeight * 0.42; // End animation when 10% of the element is still visible

        if (distFromTop > triggerStart && distFromTop < triggerEnd) {
            moveIn(el);
        } else {
            moveOut(el);
        }
    }

    function moveOut(el) {
        var headers = el.find(".element-headers");
        var media = el.find(".element-media");

        animateOut(headers);
        animateOut(media);
    }

    function moveIn(el) {
        var headers = el.find(".element-headers");
        var media = el.find(".element-media");

        animateIn(headers);
        animateIn(media);
    }

    function animateOut(element) {
        element.removeClass("wow fadeInUp");
        element.addClass("fadeOutUp animated");
        element.css({"animation-name": "fadeOutUp", "-webkit-animation-name": "fadeOutUp", "animation-delay": "0s"});
    }

    function animateIn(element) {
        element.removeClass("fadeOutUp");
        element.addClass("animated fadeInUp");
        element.css({"animation-name": "fadeInUp", "-webkit-animation-name": "fadeInUp", "animation-delay": "0s"});
    }
});
