document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    const scrollAmount = 270; 

    nextBtn.addEventListener("click", () => {
        carousel.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollLeft -= scrollAmount;
    });
});