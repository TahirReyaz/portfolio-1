// Dark/ light mode toggling

const lightMode = {
    "--background": "#FFFCEC",
    "--primary": "#4F5D75",
    "--secondary": "#2D3142",
    "--tertiary": "#FFFFFF"
}
const darkMode = {
    "--background": "#2D3142",
    "--primary": "#FFFFFF",
    "--secondary": "#FFFFFF",
    "--tertiary": "#2D3142"
}

$('#colorMode').change(() => {
    if($('#colorMode').is(':checked')) {
        $(':root').css(darkMode);
    } else {
        $(':root').css(lightMode);
    }
});

// Scrolling through navbar links
$("#navbar a").click(function(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 400);
});

// Toggle dark/ light mode according to the current time
var now = new Date();
if(now.getHours() < 6 || now.getHours() >= 18) {
    $('#colorMode').click();
}

// Toggle Back to Top button display when the user scrolls down 20px from the top of the document
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#backToTop').css("display", "block")
    } else {
        $('#backToTop').css("display", "none")
    }
};
$('#backToTop').click(() => {
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 400);
});