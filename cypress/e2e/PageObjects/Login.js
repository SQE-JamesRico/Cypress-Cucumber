import 'cypress-xpath';
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given ('The user is in the Home Page', () => {
    cy.visit("https://www.demoblaze.com")
    cy.wait(1000)
})
And ("Click the Login Navigation link", () => {
    cy.xpath('//a[@id="login2"]').click()
})
//For the Successfull Login
When ("The user enter a valid credentials {string} and {string}", (username, password) => {
    cy.xpath('//input[@id="loginusername"]').type(username,{force: true})
    cy.xpath('//input[@id="loginpassword"]').type(password,{force: true})
})
And ("Click the Login", () => {
    cy.xpath('//div[@class="modal-footer"]//button[@class="btn btn-primary"]').last().click()
})
Then ("The user has Successfully Login {string}", (expectedText) => {
    cy.xpath('//a[@id="nameofuser"]')
    .should('exist')
    .should('contain.text', expectedText)
})

