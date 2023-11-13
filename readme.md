# Cypress Cucumber tests

Automated Tests for https://www.saucedemo.com/ with Cypress.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for https://www.saucedemo.com/ using the Cypress framework.

## Requirements
- Node.js (v14.17.3 or higher)
- Cypress (v13.4.0)
- Cypress-cucumber-preprocessor (v4.3.1)
- Mochawesome (v7.1.3)


All dependencies except Node.js can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```

## Installation
1. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/saucedemo-cypress-cucumber-tests
    ```

2. Navigate to the project directory.
    ```
    cd saucedemo-cypress-cucumber-tests
    ```

3. Install the required dependencies.
    ```
    npm install
    ```

## Usage
### Running Tests
To run the automated tests using Cypress, you can use the following npm commands:

- Run the automated tests using Cypress (headless mode):
    ```
    npm test
    ```

- Run the automated tests using Cypress with a graphical user interface (UI):
    ```
    npm start
    ```

Choose the appropriate script based on your testing needs.