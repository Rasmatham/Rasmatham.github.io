class TabControl {
    constructor(tabs, canBeClosed = true) {
        this.addTabs = (tabs, canBeClosed = true) => {
            tabs === null || tabs === void 0 ? void 0 : tabs.forEach((tab, id) => {
                this._tabs.set(id, tab);
                const header = document.createElement(`div`);
                const tabOpen = document.createElement(`button`);
                tabOpen.classList.add(`tabOpen`);
                header.appendChild(tabOpen);
                tabOpen.appendChild(tab.tabHeader);
                if (canBeClosed) {
                    const tabClose = document.createElement(`button`);
                    tabClose.classList.add(`tabClose`);
                    header.appendChild(tabClose);
                    tabClose.textContent = `X`;
                    tabClose.addEventListener(`click`, () => {
                        this.removeTab(id);
                    });
                }
                header.id = `header_${id}`;
                header.classList.add(`tabHeader`);
                tab.tabContent.id = `content_${id}`;
                tab.tabContent.classList.add(`tabContent`);
                this._headers.appendChild(header);
                this._contents.appendChild(tab.tabContent);
                tabOpen.addEventListener(`click`, (ev) => {
                    var _a;
                    this._tabs.forEach((tab, thisId) => {
                        tab.tabContent.style.display = `none`;
                    });
                    tab.tabContent.style.display = `block`;
                    (_a = this._headers.querySelector(`.selected`)) === null || _a === void 0 ? void 0 : _a.classList.remove(`selected`);
                    header.classList.add(`selected`);
                });
            });
            return this;
        };
        this.removeTab = (id) => {
            this._tabs.delete(id);
            const header = this._headers.querySelector(`#header_${id}`);
            const content = this._contents.querySelector(`#content_${id}`);
            header === null || header === void 0 ? void 0 : header.remove();
            content === null || content === void 0 ? void 0 : content.remove();
            return this;
        };
        this._tabs = new Map(tabs);
        this.html = document.createElement(`div`);
        this.html.classList.add(`tabControl`);
        this._headers = document.createElement(`div`);
        this._headers.classList.add(`tabHeaders`);
        this._contents = document.createElement(`div`);
        this._contents.classList.add(`tabContents`);
        this.html.appendChild(this._headers);
        this.html.appendChild(this._contents);
        this.addTabs(this._tabs, canBeClosed);
    }
}
export default TabControl;
//# sourceMappingURL=tabs.js.map