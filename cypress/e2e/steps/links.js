import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../pages/MainPage";
import ItemPage from "../../../pages/ItemPage";

When('the user click on {string}', function(item) {
    MainPage.openItemPage(item);
});

Then('the link on twitter should lead on twitter', function () {
    MainPage.twitterButton().should('have.attr', 'href').and('include', 'https://twitter.com/');
});

Then('the link on facebook should lead on facebook', function () {
    MainPage.facebookButton().should('have.attr', 'href').and('include', 'https://www.facebook.com/');
});
  
Then('the link on linkedin should lead on linkedin', function () {
    MainPage.linkedinButton().should('have.attr', 'href').and('include', 'https://www.linkedin.com/');
});

Then('{string} page should be opened', function(item) {
    ItemPage.name().should('have.text',item);
});