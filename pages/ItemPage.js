class ItemPage {
    name() {
        return cy.get('.inventory_details_name.large_size');
    }
}

export default new ItemPage();