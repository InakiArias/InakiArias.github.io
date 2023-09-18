function toggleMobileMenu() {
    document.querySelector('.top-1').classList.toggle('tilt-top');
    document.querySelector('.bottom-1').classList.toggle('tilt-bottom');
    document.querySelector('#mobile-menu').classList.toggle('show-menu-1');
    document.querySelector('.line-1').classList.toggle('change-1');
}

document.querySelectorAll('.mobile-toggle-btn').forEach(elem => elem.addEventListener("click", () => toggleMobileMenu()));