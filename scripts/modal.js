function closeModals() {
    document.querySelectorAll(".modal.active").forEach(function(element) {
        element.classList.remove("active");
    });
}