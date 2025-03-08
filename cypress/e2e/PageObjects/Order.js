import 'cypress-xpath';
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given ('The user is in the Home Page', () => {
    cy.visit("https://www.demoblaze.com")
    wait(5000)
})
And ("Click the Nexus 6 Phone", () => {
    cy.xpath('//div[@class="card h-100"]//a[@href="prod.html?idp_=3"]').last().click()
})
And ("Click the Add to Cart Button", () => {
    cy.xpath('//a[@class="btn btn-success btn-lg"]').click()
})
And ("Click the Cart Navigation Link", () => {
    cy.xpath('//a[@id="cartur"]').click()
})
And ("Click the Place Order Button", () => {
    cy.xpath('//button[@class="btn btn-success"]').last().click()
})
And ("Fill out the fields {string} and {string} and {string} and {string} and {string} and {string}", (nameField, countryField, cityField, cardField, monthField, yearField) => {
    cy.xpath('//div[@class="modal-content"]//input[@id="name"]').type(nameField,{force: true})
    cy.xpath('//input[@id="country"]').type(countryField,{force: true})
    cy.xpath('//input[@id="city"]').type(cityField,{force: true})
    cy.xpath('//input[@id="card"]').type(cardField,{force: true})
    cy.xpath('//input[@id="month"]').type(monthField,{force: true})
    cy.xpath('//input[@id="year"]').type(yearField,{force: true})
})
And ("Click the Purchase Button", () => {
    cy.xpath('//button[@onclick="purchaseOrder()"]').last().click()
})
Then ("The user has Successfully order an item {string}", (expectedText) => {
    cy.contains('h2', expectedText)
})