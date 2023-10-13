# Intro to Cypress

This repo is intended as a companion to an introductory session to Cypress. You can explore the files and try out some Cypress tests for yourself.

## Set up
Cypress is already installed in this repo, but if you need to install Cypress again at any point, you can run `npm install -D cypress`.

Run `npm install` to install the dependencies for this project.

## Running Cypress
To run Cypress, use the command `npx cypress open`. 

The first time you run Cypress, you will usually see a message saying that it's been recognised that you haven't ran Cypress in this folder before. If this is the case, a separate window will open. Please select 'E2E Testing'. You will need to configure the tests simply by clicking the button to continue and allowing Cypress to create the necessary files. You may not see it this time due to the project being set up in advance.

The following will appear in your folder structure:
- a `cypress` folder: this is like the `__tests__` folder and is meant to house our test data and suites
- a `fixtures` folder: fixtures are 'stubs' or mock data we can use when mocking in our tests
- a `support` folder: this folder usually houses something called `commands`, which are essentially functions you can create to do or repeat certain actions.
- a `cypress.config.js` file: can take a number of options e.g. viewport width for tests, but the one we will focus on is the `baseUrl`

Choose your preferred browser and Cypress will open up another window with our test suites.

[You can learn more about the folder structure via the documetation.](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

## Creating your first test suite

1. create a folder inside of `cypress` called `e2e`
2. create a file with a name that ends with `.cy.js` e.g. `app.cy.js`. I believe `.spec.js` may also be expected - experiment!
3. we can use a `describe` block, much like in a library like Jest e.g. 

```
describe('app', () => {
    // tests here
})
```

Only `it` can be used for test blocks.

```
it('should have a h1 on the page', () => {
    // test here
})
```

## Writing tests
We will look in detail at a few basic examples, but I highly suggest [looking at and bookamarking this cheatsheet of commonly used test commands](https://cheatography.com/aiqbal/cheat-sheets/cypress-io/) or [looking at this Medium article with a few examples](https://medium.com/@anshita.bhasin/commonly-used-cypress-commands-5ba0f7b55cfc).

Here is an example of a test for checking a header is present.

```
 it('should have a h1', () => {
    cy.get('h1').contains('Secret Menu Items');
  });
```
We look for a `<h1>` on our page - of which there should only ever be one - and check that the page contains the text we pass. If the `h1` is missing, the first part of the assertion will fail. If the text is not correct, the second part will fail. We can also grab elements by class, id, or data attributes that we have added e.g.

```
// by class
    cy.get('.list-item').should('have.length', 9);
// check we have nine elements with this class on the page

// by data attribute
    cy.get('[data-test="sign-up-submit"]').click();
// grab a button with a data-test attribute and click it
```
The syntax will take some time to learn but is very human readable. It may help if you have some familiarity with jQuery also as Cypress does leverage some of its functionality to interact with the DOM e.g. [take a look at the val() function in jQuery](https://api.jquery.com/val/) which in Cypress looks like:

```
cy.get('.rating-filter').invoke('val', 7).trigger('input');

// this would grab a slider and slide it to 7. You may see this used on various inputs that are harder to trigger than just a click or by typing.
```
