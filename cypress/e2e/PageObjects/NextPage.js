import 'cypress-xpath';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('The user is in the Home Page', () => {
  cy.visit('https://www.demoblaze.com');
})
When('The user click the Next Button', () => {
  // Use XPath to select the 'Next' button (assuming it's a button or link)
  cy.xpath('//button[@id="next2"]').click();
})
Then('The user would be able to view the next page of items', () => {
  cy.url().should('not.include', 'index.html')
  cy.xpath('//a[@href="prod.html?idp_=15"]').should('exist')
})