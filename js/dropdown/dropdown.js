function toggleDropdown(e) {
    /* Click is on dropdown header, it's parent is the dropdown */
    const dropdown = e.currentTarget.parentNode;

    dropdown.classList.toggle('closed');
}

document.querySelectorAll('.dropdown-header').forEach(elem => {
    elem.addEventListener("click", (e) => toggleDropdown(e));
});