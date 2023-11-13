import { When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../pages/MainPage";
import CartPage from "../../../pages/CartPage";

When('the user open the cart', function () {
    MainPage.openCart();
});

When('the user returns to the items list', function () {
    CartPage.closeCart();
});

When('the user adds item {string} to the cart', function (item) {
    MainPage.addToCart(item);
});

When('the user removes item {string} from the cart on page', function (item) {
    MainPage.cartItemsNumber().should('have.text','1');
    MainPage.removeFromCart(item);
});

When('the user removes item {string} from the cart in cart', function (item) {
    MainPage.cartItemsNumber().should('have.text','1');
    MainPage.openCart();
    CartPage.removeFromCart(item);
    CartPage.closeCart();
});

Then('cart should be opened', function() {
    CartPage.title().should('have.text','Your Cart');
});

Then('that {string} item should be in the cart', function(item) {
    MainPage.cartItemsNumber().should('have.text','1');
    MainPage.openCart();
    CartPage.itemLink(item).should('be.visible');
});

Then('the cart should be empty', function() {
    MainPage.cartItemsNumber().should('not.exist');
});