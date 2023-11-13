class MainPage {
    inventoryList () {
        return cy.get('.inventory_list');
    }

    burgerButton () {
        return cy.get('#react-burger-menu-btn');
    }

    openSideMenu () {
        this.burgerButton().click();
    }

    sideMenu () {
        return cy.get('.bm-menu');
    }

    closeSideMenuButton () {
        return cy.get('#react-burger-cross-btn');
    }

    closeSideMenu () {
        this.closeSideMenuButton().click();
    }

    logoutButton () {
        return cy.get('#logout_sidebar_link');
    }

    logout () {
        this.logoutButton().click();
    }

    twitterButton() {
        return cy.get('.social_twitter').find('a');
    }

    facebookButton() {
        return cy.get('.social_facebook').find('a');
    }

    linkedinButton() {
        return cy.get('.social_linkedin').find('a');
    }

    itemLink(name) {
        return cy.contains('.inventory_item_name', name).parent('a');
    }

    openItemPage(name) {
        this.itemLink(name).click();
    }

    addToCart(name) {
        this.itemLink(name).parent('.inventory_item_label').siblings('.pricebar').find('.btn.btn_primary.btn_small.btn_inventory').click();;
    }

    removeFromCart(name) {
        this.itemLink(name).parent('.inventory_item_label').siblings('.pricebar').find('.btn.btn_secondary.btn_small.btn_inventory').click();
    }

    cartItemsNumber () {
        return cy.get('.shopping_cart_badge');
    }

    cart() {
        return cy.get('.shopping_cart_link');
    }

    openCart() {
        this.cart().click();
    }
}

export default new MainPage();