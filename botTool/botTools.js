"use strict";
class HTMLTabControl {
    constructor() {
        this._pages = [];
    }
    addPages(tabs) {
        tabs.forEach((tab) => {
            this._pages.push(tab);
        });
        return this;
    }
    toHTML() {
        const div = document.createElement(`div`);
        div.className = `tabControl`;
        const content = document.createElement(`div`);
        content.className = `tabContent`;
        const headers = document.createElement(`div`);
        headers.className = `tabHeaders`;
        const ul = document.createElement(`ul`);
        this._pages.forEach((page) => {
            const tab = document.createElement(`li`);
            const tabButton = document.createElement(`button`);
            tabButton.className = `tabButton`;
            const tabHeader = page.header;
            tabButton.appendChild(tabHeader);
            tab.appendChild(tabButton);
            if (page.removable) {
                const closeButton = document.createElement(`button`);
                closeButton.addEventListener(`click`, () => {
                    tab.remove();
                });
                closeButton.textContent = `X`;
                closeButton.className = `closeTab`;
                tab.appendChild(closeButton);
            }
            ul.appendChild(tab);
        });
        headers.appendChild(ul);
        div.appendChild(headers);
        content.appendChild(document.createElement(`button`));
        div.appendChild(content);
        return div;
    }
}
class HTMLTab {
    constructor(tabOptions) {
        this.header = tabOptions.header;
        this.content = tabOptions.content;
        this.removable = tabOptions.removable;
    }
}
window.addEventListener(`load`, () => {
    document.body.appendChild(new HTMLTabControl().addPages([
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        }),
        new HTMLTab({
            header: document.createElement(`input`),
            content: document.createElement(`button`),
            removable: true
        })
    ]).toHTML());
});
//# sourceMappingURL=botTools.js.map