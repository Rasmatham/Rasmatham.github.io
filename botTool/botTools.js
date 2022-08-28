import { TabControl } from "./modules/tabs/tabs.js";
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
    const tabScript = document.createElement(`script`);
    tabScript.type = `module`;
    tabScript.src = `./modules/tabs/tabs.js`;
    document.head.appendChild(tabScript);
    const style = document.createElement(`link`);
    style.rel = `stylesheet`;
    style.href = `style.css`;
    document.head.appendChild(style);
    const httpScript = document.createElement(`script`);
    httpScript.type = `module`;
    httpScript.src = `./modules/httpReq/httpReq.js`;
    document.head.appendChild(httpScript);
    const addBot = {
        tabHeader: document.createElement(`div`),
        tabContent: document.createElement(`div`)
    };
    const x = new Map([
        [`abc`, addBot]
    ]);
    const addBotVars = {
        header: {
            title: document.createElement(`h1`)
        },
        content: {}
    };
    addBotVars.header.title.textContent = `test`;
    addBot.tabHeader.appendChild(addBotVars.header.title);
    const addBotContent = document.createElement(`input`);
    addBot.tabContent.appendChild(addBotContent);
    const tabs = new TabControl(new Map([
        [`1`, addBot]
    ]), false).addTabs(new Map([]));
    document.body.appendChild(tabs.html);
});
//# sourceMappingURL=botTools.js.map