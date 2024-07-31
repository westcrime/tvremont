document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-mobile-navbar");
    const mobileNavbar = document.getElementById("mobile-navbar");
    const backgroundWhileMobileNavbar = document.querySelector(".background-while-mobile-navbar");

    toggleButton.addEventListener("click", function() {
        mobileNavbar.classList.toggle("active");
        backgroundWhileMobileNavbar.classList.toggle("active");
    });

    backgroundWhileMobileNavbar.addEventListener("click", function() {
        mobileNavbar.classList.remove("active");
        backgroundWhileMobileNavbar.classList.remove("active");
    });
});
