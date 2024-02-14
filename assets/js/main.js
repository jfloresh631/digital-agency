const nav = document.querySelector(".nav");

document.addEventListener("click", (e) => {
    if (e.target.matches(".toggle")) {
        nav.classList.toggle("nav--active");
    }
});