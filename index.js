// function changeMode(){

const lightMode = {
    "--background": "#FFFCEC",
    "--primary": "#4F5D75",
    "--secondary": "#2D3142",
    "--tertiary": "#EF8354",
    "--basicFontColor": "#000000"
}
const darkMode = {
    "--background": "#2D3142",
    "--primary": "#FFFCEC",
    "--secondary": "#FFFCEC",
    "--tertiary": "#EF8354",
    "--basicFontColor": "#FFFFFF"
}

$('#colorMode').change(() => {
    if($('#colorMode').is(':checked')) {
        $(':root').css(darkMode);
    } else {
        $(':root').css(lightMode);
    }
});
