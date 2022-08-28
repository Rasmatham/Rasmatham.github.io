import { TabControl, Tab, Tabs } from "./modules/tabs/tabs.js"
import * as httpReq from "./modules/httpReq/httpReq.js"

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
	None = 0,
	Classic = 1,
	Full = 2
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

window.addEventListener(`load`, () => {
	//#region add other files
	const tabScript = document.createElement(`script`)
	tabScript.type = `module`;
	tabScript.src = `./modules/tabs/tabs.js`;
	document.head.appendChild(tabScript)
	const style = document.createElement(`link`)
	style.rel = `stylesheet`;
	style.href = `style.css`;
	document.head.appendChild(style)
	const httpScript = document.createElement(`script`)
	httpScript.type = `module`;
	httpScript.src = `./modules/httpReq/httpReq.js`;
	document.head.appendChild(httpScript)
	//#endregion

	const addBot:Tab = {
		tabHeader: document.createElement(`div`),
		tabContent: document.createElement(`div`)
	}

	const x:Tabs = new Map([
		[`abc`, addBot]
	])

	//#region
	const addBotVars = {
		header: {
			title: document.createElement(`h1`)
		},
		content: {

		}
	}

	addBotVars.header.title.textContent = `test`
	addBot.tabHeader.appendChild(addBotVars.header.title)

	
	const addBotContent = document.createElement(`input`)
	addBot.tabContent.appendChild(addBotContent)
	//#endregion

	const tabs = new TabControl(new Map([
		[`1`, addBot]
	]), false).addTabs(new Map([
	]))
	document.body.appendChild(tabs.html)
})