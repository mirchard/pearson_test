import Page from './page';

// sub page containing specific selectors and methods for a specific page
class HomePage extends Page {
    get closeCookieNotificationButton() { return $('#cookie-notification-policy-accept-continue') }

    open() {
        super.open("");
    }

    dismissCookieNotification() {
        if (this.closeCookieNotificationButton.isDisplayed()) {
            this.closeCookieNotificationButton.click();
        }
    }
}

export default new HomePage();
