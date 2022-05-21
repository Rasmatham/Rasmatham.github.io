"use strict";
window.addEventListener(`load`, () => {
    const title = document.getElementById(`title`);
    title.addEventListener(`click`, () => {
        const ifr = document.getElementById(`ifr`);
        ifr.src = `./frontPage.html`;
    });
});
//# sourceMappingURL=main.js.map