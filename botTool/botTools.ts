//#region type declarations
	type keyVal<T> = {
		key: string,
		value: T
	}
//#endregion

//#region Discord api types
enum locale {
	Danish = `da`,
	German = `de`,
	EnglishUK = `en-GB`,
	EnglishUS = `en-US`,
	Spanish = `en-ES`,
	French = `fr`,
	Croatian = `hr`,
	Italian = `it`,
	Lithauanian = `lt`,
	Hungarian = `hu`,
	Dutch = `nl`,
	Norwegian = `no`,
	Polish = `pl`,
	Portugese = `pt-BR`,
	ROmanian = `ro`,
	Finnish = `fi`,
	Swedish = `sv-SE`,
	Vietnamese = `vi`,
	Turkish = `tr`,
	Czech = `cs`,
	Greek = `el`,
	Bulgarian = `bg`,
	Russian = `ru`,
	Ukrainian = `uk`,
	Hindi = `hi`,
	Thai = `th`,
	ChinesePRC = `zh-CN`,
	Japanese = `js`,
	ChineseTW = `zh-TW`,
	Korean = `ko`
}
enum userFlags {
	Staff = 1 << 0,
	Partner = 1 << 1,
	Hypesquad = 1 << 2,
	BugHunterLevelOne = 1 << 3,
	MFA_SMS = 1 << 4,
	PremiumPromoDisabled = 1 << 5,
	HypesquadBravery = 1 << 6,
	HypesquadBrilliance = 1 << 7,
	HypesquadBalance = 1 << 8,
	EarlySupporter = 1 << 9,
	TeamPsuedoUser = 1 << 10,
	InternalApp = 1 << 11,
	System = 1 << 12,
	HasUnreadUrgentMessages = 1 << 13,
	BugHunterLavelTwo = 1 << 14,
	UnderageDeleted = 1 << 15,
	VerifiedBot = 1 << 16,
	VerifiedDeveloper = 1 << 17,
	CertifiedModerator = 1 << 18,
	BotHTTPInteractions = 1 << 19,
	Spammer = 1 << 20,
	DisabledPremium = 1 << 21,
	// = 1 << 22
	ApplicationCommandBadge = 1 << 23,
	// = 1 << 23
	// = 1 << 24
	// = 1 << 25
	// = 1 << 26
	// = 1 << 27
	// = 1 << 28
	// = 1 << 29
	// = 1 << 30
	// = 1 << 31
	// = 1 << 32
	// = 1 << 33
	// = 1 << 34
	// = 1 << 35
	// = 1 << 36
	PremiumDscriminator = 1 << 37,
	UsedDesktopClient = 1 << 38,
	UsedWebClient = 1 << 39,
	UsedMobileClient = 1 << 40,
	Disabled = 1 << 41,
	// = 1 << 42
	VerifiedEmail = 1 << 43,
	Quarantined = 1 << 44

}
enum nitroLevel {
	none = 0,
	classic = 1,
	full = 2
}
type DiscordUser = {
	id: string
	username: string
	discriminator: string
	avatar: string|null
	bot?: boolean
	system?: boolean
	mfa_enabled?: boolean
	banner?: string|null
	accent_color?: number|null
	locale?: locale
	verified?: boolean
	email?: string|null
	flags?: userFlags
	premium_type?: nitroLevel
	public_flags?: userFlags
}
//#endregion

//#region I made tabs
type TabOptions = {
	header: HTMLElement|string,
	content: HTMLElement,
	id: string,
	removable?: boolean,
	openOnCreation?: boolean
}

class HTMLTabControl {
	private _pages: keyVal<HTMLTab>[];
	private _div: HTMLDivElement;
	private _headers: HTMLDivElement;
	private _content: HTMLElement
	private _ul: HTMLUListElement;
	constructor() {
		this._pages = [];
		this._div = document.createElement(`div`);
		this._headers = document.createElement(`div`);
		this._content = document.createElement(`div`);
		this._ul = document.createElement(`ul`)
		this._headers.appendChild(this._ul)
		this._div.appendChild(this._headers)
	}
	addPages(tabs: HTMLTab[]) {
		tabs.forEach((tab) => {
			if(!this._ids.includes(tab.id)){
				this._pages.push({key: tab.id, value: tab})
				this.createTab(tab)
			}
		})
		return this
	}

	private createTab(page: HTMLTab){
		const tab = document.createElement(`li`)
		this._ul.appendChild(tab)
		const tabButton = document.createElement(`button`)
		tab.appendChild(tabButton)
		const tabHeader = page.header
		tabButton.appendChild(tabHeader)

		if(page.removable){
			const closeButton = document.createElement(`button`)
			tab.appendChild(closeButton)
			closeButton.addEventListener(`click`, () => {
				this._pages = this._pages.filter((pageIndex) => page.id != pageIndex.value.id)
				tab.remove()
				this._content.remove()
				console.log(this._ids, page.id)
				console.log(this._ids.indexOf(page.id) - 1)
				console.log(this._pages[this._ids.indexOf(page.id) - 1].value.content)
				this._content = this._pages[0].value.content
				this._div.appendChild(this._content)
			})
			closeButton.textContent = `X`
			closeButton.className = `closeTab`
			tabButton.className = `tabButton`
		} else {
			tabButton.className = `tabButton fullWidth`
		}

		tabButton.addEventListener(`click`, () => {
			this._content.remove()
			this._content = page.content
			this._div.appendChild(this._content)
		})
		if(page.openNow){
			tabButton.click()
		}
	}

	private get _ids() {
		return this._pages.map((page) => page.key)
	}

	get HTML():HTMLElement {
		this._div.className = `tabControl`
		let content:HTMLElement = document.createElement(`div`)
		content.className = `tabContent`
		this._headers.className = `tabHeaders`
		this._pages.forEach((page) => this.createTab(page.value))
		return this._div
	}
}
class HTMLTab {
	private _header: HTMLElement;
	private _content: HTMLElement;
	private _removable: boolean;
	private _openNow: boolean;
	private _id: string
	constructor(tabOptions: TabOptions) {
		if(typeof tabOptions.header === `string`){
			const temp = document.createElement(`h1`)
			temp.textContent = tabOptions.header;
			this._header = temp;
		} else {
			this._header = tabOptions.header
		}
		this._content = tabOptions.content;
		this._removable = tabOptions.removable !== false
		this._openNow = tabOptions.openOnCreation !== false
		this._id = tabOptions.id
	}
	get header() {
		return this._header
	}
	get content() {
		return this._content
	}
	get removable() {
		return this._removable
	}
	get openNow() {
		return this._openNow
	}
	get id() {
		return this._id
	}
}
//#endregion

//#region get value from url
enum httpRequestMethod {
	get = `GET`,
	head = `HEAD`,
	post = `POST`,
	put = `PUT`,
	delete = `DELETE`,
	connect = `CONNECT`,
	options = `OPTIONS`,
	trace = `TRACE`,
	patch = `PATCH`
}
enum xhrReadyState {
	unsent = 0,
	opened = 1,
	headersRecieved = 2,
	loading = 3,
	done = 4
}
enum httpStatus {
	ok = 200
}
const HTTPReq = (reqInput: {
	url:string | URL,
	reqType:httpRequestMethod,
	headers?: keyVal<string>[]
},
cb: (returnObject:any) => void) => {
	const xhr = new XMLHttpRequest();
	xhr.open(reqInput.reqType, reqInput.url)
	reqInput.headers?.forEach((pair) => {
		xhr.setRequestHeader(pair.key, pair.value)
	})
	xhr.addEventListener(`load`, () => {
		if (xhr.readyState === xhrReadyState.done) {
			if (xhr.status === httpStatus.ok) {
				cb(JSON.parse(xhr.responseText))
			} else {
				console.error(xhr.statusText)
			}
		}
	})
	xhr.addEventListener(`error`, () => {
		console.error(xhr.statusText)
	})
	xhr.send()
}
//#endregion


window.addEventListener(`load`, () => {
	const botList = new HTMLTabControl()
	document.body.appendChild(botList.HTML)
	const tabStyle = document.createElement(`link`)
	document.head.appendChild(tabStyle)
	tabStyle.rel = `stylesheet`
	tabStyle.href = `tabs.css`
	const style = document.createElement(`link`)
	document.head.appendChild(style)
	style.rel = `stylesheet`
	style.href = `style.css`
	//=========================================================
	const addBot = {
		header: document.createElement(`h1`),
		content: document.createElement(`div`),
		removable: false,
		id: `addBot`
	}
	addBot.header.textContent = `Add Bot`
	
	const label = document.createElement(`label`)
	addBot.content.appendChild(label)
	label.textContent = `Bot Token: `
	label.htmlFor = `tokenInput`
	label.title = `The token is never sent anywhere other than Discord and your computer. The token is only used to get information about the bot for use on this page`

	const tokenField = document.createElement(`input`)
	addBot.content.appendChild(tokenField)
	tokenField.id = label.htmlFor
	tokenField.addEventListener(`keydown`, (e) => {
		if (!e.repeat && e.key === `Enter`){
			apply.click()
		}
	})

	const apply = document.createElement(`button`)
	addBot.content.appendChild(apply)
	apply.textContent = `Apply`
	apply.addEventListener(`click`, () => {
		const newBot:TabOptions = {
			header: document.createElement(`div`),
			content: document.createElement(`input`),
			id: ``

		}
		if(newBot.header instanceof HTMLDivElement){
			newBot.header.title = tokenField.value
			tokenField.value = ``
			
			HTTPReq({
				reqType: httpRequestMethod.get,
				headers: [
					{
						key: `Authorization`,
						value: `Bot ${newBot.header.title}`
					}
				],
				url: `https://discord.com/api/v10/users/@me`
			}, (client:DiscordUser) => {
				if(newBot.header instanceof HTMLDivElement){
					const pfp = document.createElement(`img`)
					newBot.header.appendChild(pfp)
					pfp.src = client.avatar?
						`https://cdn.discordapp.com/avatars/${client.id}/${client.avatar}`:
						`https://cdn.discordapp.com/embed/avatars/${Number(client.discriminator)%5}.png`
					const username = document.createElement(`h1`)
					newBot.header.appendChild(username)
					username.textContent = client.username
					newBot.id = newBot.header.title
					botList.addPages([new HTMLTab(newBot)])
				}
			})
		}
	})

	//=========================================================
	botList.addPages([new HTMLTab(addBot)])
})