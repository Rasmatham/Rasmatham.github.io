"use strict";
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
    nitroLevel[nitroLevel["none"] = 0] = "none";
    nitroLevel[nitroLevel["classic"] = 1] = "classic";
    nitroLevel[nitroLevel["full"] = 2] = "full";
})(nitroLevel || (nitroLevel = {}));
class HTMLTabControl {
    constructor() {
        this._pages = [];
        this._div = document.createElement(`div`);
        this._headers = document.createElement(`div`);
        this._content = document.createElement(`div`);
        this._ul = document.createElement(`ul`);
        this._headers.appendChild(this._ul);
        this._div.appendChild(this._headers);
    }
    addPages(tabs) {
        tabs.forEach((tab) => {
            if (!this._ids.includes(tab.id)) {
                this._pages.push({ key: tab.id, value: tab });
                this.createTab(tab);
            }
        });
        return this;
    }
    createTab(page) {
        const tab = document.createElement(`li`);
        this._ul.appendChild(tab);
        const tabButton = document.createElement(`button`);
        tab.appendChild(tabButton);
        const tabHeader = page.header;
        tabButton.appendChild(tabHeader);
        if (page.removable) {
            const closeButton = document.createElement(`button`);
            tab.appendChild(closeButton);
            closeButton.addEventListener(`click`, () => {
                this._pages = this._pages.filter((pageIndex) => page.id != pageIndex.value.id);
                tab.remove();
                this._content.remove();
                console.log(this._ids, page.id);
                console.log(this._ids.indexOf(page.id) - 1);
                console.log(this._pages[this._ids.indexOf(page.id) - 1].value.content);
                this._content = this._pages[0].value.content;
                this._div.appendChild(this._content);
            });
            closeButton.textContent = `X`;
            closeButton.className = `closeTab`;
            tabButton.className = `tabButton`;
        }
        else {
            tabButton.className = `tabButton fullWidth`;
        }
        tabButton.addEventListener(`click`, () => {
            this._content.remove();
            this._content = page.content;
            this._div.appendChild(this._content);
        });
        if (page.openNow) {
            tabButton.click();
        }
    }
    get _ids() {
        return this._pages.map((page) => page.key);
    }
    get HTML() {
        this._div.className = `tabControl`;
        let content = document.createElement(`div`);
        content.className = `tabContent`;
        this._headers.className = `tabHeaders`;
        this._pages.forEach((page) => this.createTab(page.value));
        return this._div;
    }
}
class HTMLTab {
    constructor(tabOptions) {
        if (typeof tabOptions.header === `string`) {
            const temp = document.createElement(`h1`);
            temp.textContent = tabOptions.header;
            this._header = temp;
        }
        else {
            this._header = tabOptions.header;
        }
        this._content = tabOptions.content;
        this._removable = tabOptions.removable !== false;
        this._openNow = tabOptions.openOnCreation !== false;
        this._id = tabOptions.id;
    }
    get header() {
        return this._header;
    }
    get content() {
        return this._content;
    }
    get removable() {
        return this._removable;
    }
    get openNow() {
        return this._openNow;
    }
    get id() {
        return this._id;
    }
}
var httpRequestMethod;
(function (httpRequestMethod) {
    httpRequestMethod["get"] = "GET";
    httpRequestMethod["head"] = "HEAD";
    httpRequestMethod["post"] = "POST";
    httpRequestMethod["put"] = "PUT";
    httpRequestMethod["delete"] = "DELETE";
    httpRequestMethod["connect"] = "CONNECT";
    httpRequestMethod["options"] = "OPTIONS";
    httpRequestMethod["trace"] = "TRACE";
    httpRequestMethod["patch"] = "PATCH";
})(httpRequestMethod || (httpRequestMethod = {}));
var xhrReadyState;
(function (xhrReadyState) {
    xhrReadyState[xhrReadyState["unsent"] = 0] = "unsent";
    xhrReadyState[xhrReadyState["opened"] = 1] = "opened";
    xhrReadyState[xhrReadyState["headersRecieved"] = 2] = "headersRecieved";
    xhrReadyState[xhrReadyState["loading"] = 3] = "loading";
    xhrReadyState[xhrReadyState["done"] = 4] = "done";
})(xhrReadyState || (xhrReadyState = {}));
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["ok"] = 200] = "ok";
})(httpStatus || (httpStatus = {}));
const HTTPReq = (reqInput, cb) => {
    var _a;
    const xhr = new XMLHttpRequest();
    xhr.open(reqInput.reqType, reqInput.url);
    (_a = reqInput.headers) === null || _a === void 0 ? void 0 : _a.forEach((pair) => {
        xhr.setRequestHeader(pair.key, pair.value);
    });
    xhr.addEventListener(`load`, () => {
        if (xhr.readyState === xhrReadyState.done) {
            if (xhr.status === httpStatus.ok) {
                cb(JSON.parse(xhr.responseText));
            }
            else {
                console.error(xhr.statusText);
            }
        }
    });
    xhr.addEventListener(`error`, () => {
        console.error(xhr.statusText);
    });
    xhr.send();
};
window.addEventListener(`load`, () => {
    const botList = new HTMLTabControl();
    document.body.appendChild(botList.HTML);
    const tabStyle = document.createElement(`link`);
    document.head.appendChild(tabStyle);
    tabStyle.rel = `stylesheet`;
    tabStyle.href = `tabs.css`;
    const style = document.createElement(`link`);
    document.head.appendChild(style);
    style.rel = `stylesheet`;
    style.href = `style.css`;
    const addBot = {
        header: document.createElement(`h1`),
        content: document.createElement(`div`),
        removable: false,
        id: `addBot`
    };
    addBot.header.textContent = `Add Bot`;
    const label = document.createElement(`label`);
    addBot.content.appendChild(label);
    label.textContent = `Bot Token: `;
    label.htmlFor = `tokenInput`;
    label.title = `The token is never sent anywhere other than Discord and your computer. The token is only used to get information about the bot for use on this page`;
    const tokenField = document.createElement(`input`);
    addBot.content.appendChild(tokenField);
    tokenField.id = label.htmlFor;
    tokenField.addEventListener(`keydown`, (e) => {
        if (!e.repeat && e.key === `Enter`) {
            apply.click();
        }
    });
    const apply = document.createElement(`button`);
    addBot.content.appendChild(apply);
    apply.textContent = `Apply`;
    apply.addEventListener(`click`, () => {
        const newBot = {
            header: document.createElement(`div`),
            content: document.createElement(`input`),
            id: ``
        };
        if (newBot.header instanceof HTMLDivElement) {
            newBot.header.title = tokenField.value;
            tokenField.value = ``;
            HTTPReq({
                reqType: httpRequestMethod.get,
                headers: [
                    {
                        key: `Authorization`,
                        value: `Bot ${newBot.header.title}`
                    }
                ],
                url: `https://discord.com/api/v10/users/@me`
            }, (client) => {
                if (newBot.header instanceof HTMLDivElement) {
                    const pfp = document.createElement(`img`);
                    newBot.header.appendChild(pfp);
                    pfp.src = client.avatar ?
                        `https://cdn.discordapp.com/avatars/${client.id}/${client.avatar}` :
                        `https://cdn.discordapp.com/embed/avatars/${Number(client.discriminator) % 5}.png`;
                    const username = document.createElement(`h1`);
                    newBot.header.appendChild(username);
                    username.textContent = client.username;
                    newBot.id = newBot.header.title;
                    botList.addPages([new HTMLTab(newBot)]);
                }
            });
        }
    });
    botList.addPages([new HTMLTab(addBot)]);
});
//# sourceMappingURL=botTools.js.map