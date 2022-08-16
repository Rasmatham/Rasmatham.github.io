import TabControl from "./tabs.js";
var locale;
(function (locale) {
    locale["Danish"] = "da";
    locale["German"] = "de";
    locale["EnglishUK"] = "en-GB";
    locale["EnglishUS"] = "en-US";
    locale["Spanish"] = "en-ES";
    locale["French"] = "fr";
    locale["Croatian"] = "hr";
    locale["Italian"] = "it";
    locale["Lithauanian"] = "lt";
    locale["Hungarian"] = "hu";
    locale["Dutch"] = "nl";
    locale["Norwegian"] = "no";
    locale["Polish"] = "pl";
    locale["Portugese"] = "pt-BR";
    locale["ROmanian"] = "ro";
    locale["Finnish"] = "fi";
    locale["Swedish"] = "sv-SE";
    locale["Vietnamese"] = "vi";
    locale["Turkish"] = "tr";
    locale["Czech"] = "cs";
    locale["Greek"] = "el";
    locale["Bulgarian"] = "bg";
    locale["Russian"] = "ru";
    locale["Ukrainian"] = "uk";
    locale["Hindi"] = "hi";
    locale["Thai"] = "th";
    locale["ChinesePRC"] = "zh-CN";
    locale["Japanese"] = "js";
    locale["ChineseTW"] = "zh-TW";
    locale["Korean"] = "ko";
})(locale || (locale = {}));
var userFlags;
(function (userFlags) {
    userFlags[userFlags["Staff"] = 1] = "Staff";
    userFlags[userFlags["Partner"] = 2] = "Partner";
    userFlags[userFlags["Hypesquad"] = 4] = "Hypesquad";
    userFlags[userFlags["BugHunterLevelOne"] = 8] = "BugHunterLevelOne";
    userFlags[userFlags["MFA_SMS"] = 16] = "MFA_SMS";
    userFlags[userFlags["PremiumPromoDisabled"] = 32] = "PremiumPromoDisabled";
    userFlags[userFlags["HypesquadBravery"] = 64] = "HypesquadBravery";
    userFlags[userFlags["HypesquadBrilliance"] = 128] = "HypesquadBrilliance";
    userFlags[userFlags["HypesquadBalance"] = 256] = "HypesquadBalance";
    userFlags[userFlags["EarlySupporter"] = 512] = "EarlySupporter";
    userFlags[userFlags["TeamPsuedoUser"] = 1024] = "TeamPsuedoUser";
    userFlags[userFlags["InternalApp"] = 2048] = "InternalApp";
    userFlags[userFlags["System"] = 4096] = "System";
    userFlags[userFlags["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
    userFlags[userFlags["BugHunterLavelTwo"] = 16384] = "BugHunterLavelTwo";
    userFlags[userFlags["UnderageDeleted"] = 32768] = "UnderageDeleted";
    userFlags[userFlags["VerifiedBot"] = 65536] = "VerifiedBot";
    userFlags[userFlags["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
    userFlags[userFlags["CertifiedModerator"] = 262144] = "CertifiedModerator";
    userFlags[userFlags["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
    userFlags[userFlags["Spammer"] = 1048576] = "Spammer";
    userFlags[userFlags["DisabledPremium"] = 2097152] = "DisabledPremium";
    userFlags[userFlags["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
    userFlags[userFlags["PremiumDscriminator"] = 32] = "PremiumDscriminator";
    userFlags[userFlags["UsedDesktopClient"] = 64] = "UsedDesktopClient";
    userFlags[userFlags["UsedWebClient"] = 128] = "UsedWebClient";
    userFlags[userFlags["UsedMobileClient"] = 256] = "UsedMobileClient";
    userFlags[userFlags["Disabled"] = 512] = "Disabled";
    userFlags[userFlags["VerifiedEmail"] = 2048] = "VerifiedEmail";
    userFlags[userFlags["Quarantined"] = 4096] = "Quarantined";
})(userFlags || (userFlags = {}));
var nitroLevel;
(function (nitroLevel) {
    nitroLevel[nitroLevel["None"] = 0] = "None";
    nitroLevel[nitroLevel["Classic"] = 1] = "Classic";
    nitroLevel[nitroLevel["Full"] = 2] = "Full";
})(nitroLevel || (nitroLevel = {}));
window.addEventListener(`load`, () => {
    const tabStyle = document.createElement(`link`);
    tabStyle.rel = `stylesheet`;
    tabStyle.href = `tabs.css`;
    document.head.appendChild(tabStyle);
    const style = document.createElement(`link`);
    style.rel = `stylesheet`;
    style.href = `style.css`;
    document.head.appendChild(style);
    const tabScript = document.createElement(`script`);
    tabScript.type = `module`;
    tabScript.src = `tabs.js`;
    document.head.appendChild(style);
    const test = [];
    for (let i = 0; i < 100; i++) {
        const btn = document.createElement(`h1`);
        btn.textContent = `test${i}`;
        btn.id = `btn${i}`;
        test.push(btn);
    }
    const tabs = new TabControl(new Map([
        [`0`, { tabHeader: test[0], tabContent: test[1] }]
    ]), false);
    tabs.addTabs(new Map([
        [`1`, { tabHeader: test[2], tabContent: test[3] }],
        [`2`, { tabHeader: test[4], tabContent: test[5] }],
        [`3`, { tabHeader: test[6], tabContent: test[7] }],
        [`4`, { tabHeader: test[8], tabContent: test[9] }],
        [`5`, { tabHeader: test[10], tabContent: test[11] }],
        [`6`, { tabHeader: test[12], tabContent: test[13] }],
        [`7`, { tabHeader: test[14], tabContent: test[15] }],
        [`8`, { tabHeader: test[16], tabContent: test[17] }],
        [`9`, { tabHeader: test[18], tabContent: test[19] }],
        [`10`, { tabHeader: test[20], tabContent: test[21] }],
        [`11`, { tabHeader: test[22], tabContent: test[23] }],
        [`12`, { tabHeader: test[24], tabContent: test[25] }],
        [`13`, { tabHeader: test[26], tabContent: test[27] }],
        [`14`, { tabHeader: test[28], tabContent: test[29] }],
        [`15`, { tabHeader: test[30], tabContent: test[31] }],
        [`16`, { tabHeader: test[32], tabContent: test[33] }],
        [`17`, { tabHeader: test[34], tabContent: test[35] }],
        [`18`, { tabHeader: test[36], tabContent: test[37] }],
        [`19`, { tabHeader: test[38], tabContent: test[39] }],
        [`20`, { tabHeader: test[40], tabContent: test[41] }],
        [`21`, { tabHeader: test[42], tabContent: test[43] }],
        [`22`, { tabHeader: test[44], tabContent: test[45] }],
        [`23`, { tabHeader: test[46], tabContent: test[47] }],
        [`24`, { tabHeader: test[48], tabContent: test[49] }],
        [`25`, { tabHeader: test[50], tabContent: test[51] }],
        [`26`, { tabHeader: test[52], tabContent: test[53] }],
        [`27`, { tabHeader: test[54], tabContent: test[55] }],
        [`28`, { tabHeader: test[56], tabContent: test[57] }],
        [`29`, { tabHeader: test[58], tabContent: test[59] }],
        [`30`, { tabHeader: test[60], tabContent: test[61] }],
        [`31`, { tabHeader: test[62], tabContent: test[63] }]
    ]));
    document.body.appendChild(tabs.html);
});
//# sourceMappingURL=botTools.js.map