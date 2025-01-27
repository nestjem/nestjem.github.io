document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    // Menü başlangıçta gizli olacak
    navLinks.style.display = "none";

    menuIcon.addEventListener("click", function () {
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            navLinks.style.display = "block"; // Aç
        } else {
            navLinks.style.display = "none"; // Kapat
        }
    });
});
