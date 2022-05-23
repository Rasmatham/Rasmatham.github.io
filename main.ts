window.addEventListener(`load`, () => {
	const title = document.getElementById(`title`) as HTMLButtonElement;
	title.addEventListener(`click`, () => {
		const ifr = document.getElementById(`ifr`) as HTMLIFrameElement;
		ifr.src = `./frontPage.html`;
	});
	const openMenu = document.getElementById(`showMenu`) as HTMLButtonElement;
	openMenu.addEventListener(`click`, () => {
		const menu = document.getElementById(`menuItems`) as HTMLUListElement;
		menu.classList.contains(`menuItems_hidden`)? menu.classList.remove(`menuItems_hidden`) : menu.classList.add(`menuItems_hidden`);
	});
});