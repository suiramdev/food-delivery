window.onscroll = function() {
    let navbar = document.querySelector("nav");

    if (window.pageYOffset > 800) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}