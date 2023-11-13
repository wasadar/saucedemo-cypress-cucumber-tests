import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../pages/MainPage";

Given('the user open sidemenu', function () {
    MainPage.openSideMenu();
});

When('the user closes sidemenu', function () {
    MainPage.closeSideMenu();
});

Then('the sidemenu should be opened', function () {
    MainPage.sideMenu().should('be.visible');
});

Then('the sidemenu should be closed', function () {
    MainPage.sideMenu().should('not.be.visible');
});