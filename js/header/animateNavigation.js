function scrollToElement(el) {

    window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
}

const links = document.querySelectorAll("a.nav-link.active");

for (const link of links) {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        if (document.querySelector('#mobile-menu').classList.contains('show-menu-1'))
            toggleMobileMenu();

        scrollToElement(document.querySelector(e.target.getAttribute("href")));
    });
}