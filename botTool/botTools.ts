import TabControl from "./tabs.js"

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
	const tabStyle = document.createElement(`link`)
	tabStyle.rel = `stylesheet`;
	tabStyle.href = `tabs.css`;
	document.head.appendChild(tabStyle)
	const style = document.createElement(`link`)
	style.rel = `stylesheet`;
	style.href = `style.css`;
	document.head.appendChild(style)
	const tabScript = document.createElement(`script`)
	tabScript.type = `module`;
	tabScript.src = `tabs.js`;
	document.head.appendChild(style)

	const test:Array<HTMLElement> = []
	for (let i = 0; i < 100 ; i++) {
		const btn = document.createElement(`h1`)
		btn.textContent = `test${i}`
		btn.id = `btn${i}`
		test.push(btn)
	}

	const tabs = new TabControl(new Map([
		[`0`, {tabHeader: test[0], tabContent: test[1]}],
		[`1`, {tabHeader: test[2], tabContent: test[3]}],
		[`2`, {tabHeader: test[4], tabContent: test[5]}],
		[`3`, {tabHeader: test[6], tabContent: test[7]}],
		[`4`, {tabHeader: test[8], tabContent: test[9]}],
		[`5`, {tabHeader: test[10], tabContent: test[11]}],
		[`6`, {tabHeader: test[12], tabContent: test[13]}],
		[`7`, {tabHeader: test[14], tabContent: test[15]}],
		[`8`, {tabHeader: test[16], tabContent: test[17]}],
		[`9`, {tabHeader: test[18], tabContent: test[19]}],
		[`10`, {tabHeader: test[20], tabContent: test[21]}],
		[`11`, {tabHeader: test[22], tabContent: test[23]}],
		[`12`, {tabHeader: test[24], tabContent: test[25]}],
		[`13`, {tabHeader: test[26], tabContent: test[27]}],
		[`14`, {tabHeader: test[28], tabContent: test[29]}],
		[`15`, {tabHeader: test[30], tabContent: test[31]}]
	]))
	tabs.addTabs(new Map([
		[`16`, {tabHeader: test[32], tabContent: test[33]}],
		[`17`, {tabHeader: test[34], tabContent: test[35]}],
		[`18`, {tabHeader: test[36], tabContent: test[37]}],
		[`19`, {tabHeader: test[38], tabContent: test[39]}],
		[`20`, {tabHeader: test[40], tabContent: test[41]}],
		[`21`, {tabHeader: test[42], tabContent: test[43]}],
		[`22`, {tabHeader: test[44], tabContent: test[45]}],
		[`23`, {tabHeader: test[46], tabContent: test[47]}],
		[`24`, {tabHeader: test[48], tabContent: test[49]}],
		[`25`, {tabHeader: test[50], tabContent: test[51]}],
		[`26`, {tabHeader: test[52], tabContent: test[53]}],
		[`27`, {tabHeader: test[54], tabContent: test[55]}],
		[`28`, {tabHeader: test[56], tabContent: test[57]}],
		[`29`, {tabHeader: test[58], tabContent: test[59]}],
		[`30`, {tabHeader: test[60], tabContent: test[61]}],
		[`31`, {tabHeader: test[62], tabContent: test[63]}]
	]))
	document.body.appendChild(tabs.html)
})