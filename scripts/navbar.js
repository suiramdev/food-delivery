window.onscroll = function() {
    let navbar = document.querySelector("nav");
    let main = document.querySelector("#main");

    if (main.getBoundingClientRect().height-100 < window.scrollY) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}