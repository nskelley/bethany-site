var scrollSpeed = 500; // px per second
var minScrollTime = 150; // minimum time to scroll: 150 ms
var maxScrollTime = 1000; // maximum time to scroll: 1000 ms (1 s)

function checkFavicon() {
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark & $("#favicon").attr("href") == "images/favicon-light.svg") {
        $("#favicon").attr("href", "images/favicon-dark.svg");
    } else if (!dark & $("#favicon").attr("href") == "images/favicon-dark.svg") {
        $("#favicon").attr("href", "images/favicon-light.svg");
    }
}

function scrollToDiv(selector) {
    console.log(selector);

    // Identify target div by selector
    var target = $(selector);

    // If the target exists
    if (target.length) {
        // Identify topmost scroll coordinate for the target div (offset 120 px above)
        var targetTop = target.offset().top - 20;
        // Identify current scroll position
        var current = $(document).scrollTop();
        // Identify the time it should take to scroll from initial to target position
        var scrollTime = Math.max(
            Math.min(1000 * Math.abs(targetTop - current) / scrollSpeed, maxScrollTime),
            minScrollTime
        );

        // Perform the scroll
        $("html,body").animate({
            scrollTop: targetTop
        }, scrollTime);

    // If the target does not exist
    } else {
        return false;
    }
}

$(document).ready(function() {
    // Update favicon for light/dark mode
    $(window).on("click load resize", checkFavicon);

    // Scroll to div (desktop navbar)
    $("#navbar a").each(function() {
        $(this).on("click", function() {
            scrollToDiv($(this).attr("href"));
        });
    });
});