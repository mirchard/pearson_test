import HomePage from "../pageobjects/home.page";
import SearchPage from "../pageobjects/search.page"

describe('Pearson Search', () => {
    it('should dismiss cookie notification', () => {
        HomePage.open();
        HomePage.dismissCookieNotification();
    });

    it('should have the search input displayed on main page', () => {
        expect(HomePage.searchInput).toBeVisible();
    });

    it('should search for "learn" keyword', () => {
        HomePage.search("learn");
    });

    it('should click random page result', () => {
        SearchPage.clickRandomPageResult();
    });

    it('should display next page result', () => {
        SearchPage.goToNextPage();
    });

    it('should display previous page result', () => {
        SearchPage.goToPreviousPage();
    });

    it('should redirect to the proper article', () => {
        SearchPage.clickPageResult(1);
    });
});
