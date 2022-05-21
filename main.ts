window.addEventListener(`load`, () => {
	const title = document.getElementById(`title`) as HTMLButtonElement;
	title.addEventListener(`click`, () => {
		const ifr = document.getElementById(`ifr`) as HTMLIFrameElement;
		ifr.src = `./frontPage.html`;
	});
});