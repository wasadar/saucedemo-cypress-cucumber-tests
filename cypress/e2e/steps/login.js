import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pages/LoginPage";
import MainPage from "../../../pages/MainPage";

Given('the user is on the login page', function () {
  LoginPage.visit();
});

When('the user enters a login', function (table) {
  const login = table ? table.hashes()[0].login : generateRandomString(5);

  LoginPage.inputUsername(login);
});

When('the user enters a password', function (table) {
  const password = table ? table.hashes()[0].password : generateRandomString(5);

  LoginPage.inputPassword(password);
});

When('the user clicks the login button', function () {
  LoginPage.submit();
});

Then('the item list should be shown', function () {
  MainPage.inventoryList().should('be.visible');
});

Then('the system should display an error message', function (table) {
  const error = table.hashes()[0].error;

  LoginPage.errorMessage().should('have.text', error)
});

Then('the user should not be logged in', function () {
  LoginPage.loginForm().should('be.visible');
});

function generateRandomString(length, includeNumbers = true) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + (includeNumbers ? '0123456789' : '');

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}