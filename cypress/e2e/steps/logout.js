import { Given, When } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../pages/MainPage";

Given('the user open sidemenu', function () {
  MainPage.openSideMenu();
});

When('the user clicks the logout button', function () {
  MainPage.logout();
});