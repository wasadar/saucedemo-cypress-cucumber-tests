class CartPage {
    itemLink(name) {
        return cy.contains('.inventory_item_name', name).parent('a');
    }

    removeFromCart(name) {
        this.itemLink(name).siblings('.item_pricebar').find('.btn.btn_secondary.btn_small.cart_button').click();
    }

    title() {
        return cy.get('.title');
    }

    closeCartButton() {
        return cy.get('#continue-shopping');
    }

    closeCart() {
        this.closeCartButton().click();
    }
}

export default new CartPage();