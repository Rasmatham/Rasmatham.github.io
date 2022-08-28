//#region type declarations
export type Tab = {
	tabHeader: HTMLElement,
	tabContent: HTMLElement
}

export type ID = string

export type Tabs = Map<ID, Tab>
//#endregion

export class TabControl {
	html: HTMLDivElement
	private _tabs: Tabs
	private _headers: HTMLDivElement
	private _contents: HTMLDivElement
	constructor(tabs?:Tabs, canBeClosed: boolean = true) {
		this._tabs = new Map(tabs)
		this.html = document.createElement(`div`)
		this.html.classList.add(`tabControl`)
		this._headers = document.createElement(`div`)
		this._headers.classList.add(`tabHeaders`)
		this._contents = document.createElement(`div`)
		this._contents.classList.add(`tabContents`)
		this.html.appendChild(this._headers)
		this.html.appendChild(this._contents)
		this.addTabs(this._tabs, canBeClosed)
		
	}
	addTabs = (tabs?:Tabs, canBeClosed: boolean = true) => {
		tabs?.forEach((tab, id) => {
			this._tabs.set(id, tab)

			const header = document.createElement(`div`)
			const tabOpen = document.createElement(`button`)
			tabOpen.classList.add(`tabOpen`)
			header.appendChild(tabOpen)
			tabOpen.appendChild(tab.tabHeader)
            if (canBeClosed) {
                const tabClose = document.createElement(`button`)
                tabClose.classList.add(`tabClose`)
                header.appendChild(tabClose)
                tabClose.textContent = `X`

                tabClose.addEventListener(`click`, () => {
                    this.removeTab(id)
                })
            }
			header.id = `header_${id}`
			header.classList.add(`tabHeader`)
			tab.tabContent.id = `content_${id}`
			tab.tabContent.classList.add(`tabContent`)
			this._headers.appendChild(header)
			this._contents.appendChild(tab.tabContent)

			tabOpen.addEventListener(`click`, (ev) => {
				this._tabs.forEach((tab, thisId) => {
					tab.tabContent.style.display = `none`
				})
				tab.tabContent.style.display = `block`
                this._headers.querySelector(`.selected`)?.classList.remove(`selected`)
                header.classList.add(`selected`)
			})
		})
		return this
	}
	removeTab = (id:ID) => {
		this._tabs.delete(id)
		const header = this._headers.querySelector(`#header_${id}`)
		const content = this._contents.querySelector(`#content_${id}`)
		header?.remove()
		content?.remove()
		return this
	}
}
window.addEventListener(`load`, () => {
	const tabStyle = document.createElement(`link`)
	tabStyle.rel = `stylesheet`;
	tabStyle.href = `./modules/tabs/tabs.css`;
	document.head.appendChild(tabStyle)
})