// abstract page class containing elements and functions available for all sub pages
export default class Page {
    get searchInput() { return $('#search-box-input') }
    get searchButton() { return $('button.search-box-icon') }

    open(path: string) {
        return browser.url(`https://pearson.com/${path}`);
    }

    search(searchValue: string) {
        expect(this.searchButton).toBeVisible();
        this.searchInput.setValue(searchValue);
        this.searchButton.click();
        return this;
    }
}
