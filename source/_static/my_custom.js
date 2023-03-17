//This function is called when the page is fully loaded
// it changes the URLs on the logo and on the breadcrumb home icon
$(document).ready(function(){
    // // make the breadcrumb home icon link point to a relative path one directory up from the home page
    // var my_custom_icon_url=absolute_url(window.location.href,document.getElementById("documentation_options").getAttribute("data-url_root")+'../');
    // // make the logo url point to an external page
    // var my_custom_logo_url="http://link.for.logo/";
    // var home_elements = $('.icon-home');
    // var logo_element = home_elements[0];
    // var breadcrumb_home_element = home_elements[1];
    // breadcrumb_home_element.href=my_custom_icon_url;
    // logo_element.href=my_custom_logo_url;
    let div_logo = document.getElementsByClassName("wy-side-nav-search")[0];
    let a_logo = div_logo.getElementsByTagName("a");
    a_logo[0].href="{repo_url}";
});
