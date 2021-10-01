// function changeMode(){

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
