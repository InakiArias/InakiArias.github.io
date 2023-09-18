window.addEventListener("scroll", () => {
    const scrollTrigger = 25;

    if (window.scrollY >= scrollTrigger) {
        document.querySelector(".header").classList.remove("transparent");
    } else {
        document.querySelector(".header").classList.add("transparent");
    }
})