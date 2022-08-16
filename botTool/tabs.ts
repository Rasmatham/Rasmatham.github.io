//#region type declarations
type Tab = {
	tabHeader: HTMLElement,
	tabContent: HTMLElement
}

type ID = string

type Tabs = Map<ID, Tab>
//#endregion

class TabControl {
	html: HTMLDivElement
	private _tabs: Tabs
	private _headers: HTMLDivElement
	private _contents: HTMLDivElement
	constructor(tabs?:Tabs) {
		this._tabs = new Map(tabs)
		this.html = document.createElement(`div`)
		this.html.className = `tabControl`
		this._headers = document.createElement(`div`)
		this._headers.className = `tabHeaders`
		this._contents = document.createElement(`div`)
		this._contents.className = `tabContents`
		this.html.appendChild(this._headers)
		this.html.appendChild(this._contents)
		this.addTabs(this._tabs)
		
	}
	addTabs = (tabs?:Tabs) => {
		tabs?.forEach((tab, id) => {
			this._tabs.set(id, tab)

			const header = document.createElement(`div`)
			const tabOpen = document.createElement(`button`)
			tabOpen.className = `tabOpen`
			const tabClose = document.createElement(`button`)
			tabClose.className = `tabClose`
			header.appendChild(tabOpen)
			tabOpen.appendChild(tab.tabHeader)
			header.appendChild(tabClose)
			tabClose.textContent = `X`
			header.id = `header_${id}`
			header.className = `tabHeader`
			tab.tabContent.id = `content_${id}`
			tab.tabContent.className = `tabContent`
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

			tabClose.addEventListener(`click`, () => {
				this.removeTab(id)
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
export default TabControl