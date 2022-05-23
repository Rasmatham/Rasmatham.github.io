"use strict";
window.addEventListener(`load`, () => {
    const title = document.getElementById(`title`);
    title.addEventListener(`click`, () => {
        const ifr = document.getElementById(`ifr`);
        ifr.src = `./frontPage.html`;
    });
    const openMenu = document.getElementById(`showMenu`);
    openMenu.addEventListener(`click`, () => {
        const menu = document.getElementById(`menuItems`);
        menu.classList.contains(`menuItems_hidden`) ? menu.classList.remove(`menuItems_hidden`) : menu.classList.add(`menuItems_hidden`);
    });
});
//# sourceMappingURL=main.js.map