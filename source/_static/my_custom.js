// this function changes a relative URL into an absolute url
// from https://stackoverflow.com/questions/14780350/convert-relative-path-to-absolute-using-javascript
function absolute_url(base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}

//This function is called when the page is fully loaded
// it changes the URLs on the logo and on the breadcrumb home icon
$(document).ready(function(){
    // make the breadcrumb home icon link point to a relative path one directory up from the home page
    var my_custom_icon_url=absolute_url(window.location.href,document.getElementById("documentation_options").getAttribute("data-url_root")+'../');
    // make the logo url point to an external page
    var my_custom_logo_url="http://link.for.logo/";
    var home_elements = $('.icon-home');
    var logo_element = home_elements[0];
    var breadcrumb_home_element = home_elements[1];
    breadcrumb_home_element.href=my_custom_icon_url;
    logo_element.href=my_custom_logo_url;
});
