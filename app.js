function checkFavicon() {
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark & $("#favicon").attr("href") == "images/favicon-light.svg") {
        $("#favicon").attr("href", "images/favicon-dark.svg");
    } else if (!dark & $("#favicon").attr("href") == "images/favicon-dark.svg") {
        $("#favicon").attr("href", "images/favicon-light.svg");
    }
}

$(document).ready(function() {
    
    $(window).on("click load resize", checkFavicon);
    $window.matchMedia("(prefers-color-scheme: dark)").on("change", checkFavicon);
    /*

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener 👂
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'favicon-dark.png')
  } else {
    faviconEl.setAttribute('href', 'favicon-light.png')
  }
}
*/
});