document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".cs-card-group");
    const scrollLeftBtn = document.querySelector(".cs-scroll-left");
    const scrollRightBtn = document.querySelector(".cs-scroll-right");

    // Scroll left
    scrollLeftBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Scroll right
    scrollRightBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
});