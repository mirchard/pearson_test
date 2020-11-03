import { getRandomInt } from '../lib/random';
import Page from './page';

// sub page containing specific selectors and methods for a specific page
class SearchPage extends Page {
    get totalPages() { return $$('a.pagination__page') }
    get totalArticles() { return $$('article.productItem') }
    get previousButton() { return $('a.arrowLeft') }
    get nextButton() { return $('a.arrowRight') }

    clickPageResult(pageNumber: number) {
        const element = $(`li a[data-page="${pageNumber.toString()}"]`);
        element.click();
        expect(element).toHaveAttributeContaining("class", "isActive");
        expect(this.totalArticles.length).toBeLessThanOrEqual(10);
    }

    clickRandomPageResult() {
        this.previousButton.waitForDisplayed();
        const randomPageNumber = getRandomInt(1, this.totalPages.length);
        this.clickPageResult(randomPageNumber);
    }

    goToNextPage() {
        const activePage = $('a.pagination__page.isActive');
        const activePageNumber = parseInt(activePage.getText());
        if (this.nextButton.getAttribute('disabled') === "disabled") {
            throw new Error("Can't click on 'Next' button as it's disabled.");
        } else {
            this.nextButton.click();
            expect(activePage.getText()).toEqual((activePageNumber + 1).toString());
            expect(this.totalArticles.length).toBeLessThanOrEqual(10);
        }
    }

    goToPreviousPage() {
        const activePage = $('a.pagination__page.isActive');
        const activePageNumber = parseInt(activePage.getText());
        if (this.previousButton.getAttribute('disabled') === "disabled") {
            throw new Error("Can't click on 'Previous' button as it's disabled.");
        } else {
            this.previousButton.click();
            expect(activePage.getText()).toEqual((activePageNumber - 1).toString());
            expect(this.totalArticles.length).toBeLessThanOrEqual(10);
        }
    }

    clickOnArticleByIndex(index: number) {
        this.totalArticles[index].click();
    }

    clickOnArticleByName(articleName: string) {
        const article = $(`*=${articleName}`);
        article.click();
    }
}

export default new SearchPage();
