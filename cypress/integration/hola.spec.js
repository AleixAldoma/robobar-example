// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import {
    ageAlert,
    ageInput,
    beerButton,
    checkout,
    colaButton,
    confirmationMsg,
    order,
    totalText,
    wineButton
} from "./cartPage";

describe("Order tests",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/#!/")
    })
    it('Order a cola',()=>{
        checkout().should("be.disabled")
        colaButton().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€1.25")
    })
    it('Order two colas',()=>{
        checkout().should("be.disabled")
        colaButton().click().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€2.50")
    })
    it('Order a beer',()=>{
        checkout().should("be.disabled")
        beerButton().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€2.00")
    })
    it('Order two beers',()=>{
        checkout().should("be.disabled")
        beerButton().click().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€4.00")
    })
    it('Order a wine',()=>{
        checkout().should("be.disabled")
        wineButton().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€3.00")
    })
    it('Order two wines',()=>{
        checkout().should("be.disabled")
        wineButton().click().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€6.00")
    })
    it('Order one cola, one beer',()=>{
        checkout().should("be.disabled")
        colaButton().click()
        beerButton().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€3.25")
    })
    it('Order one cola, one beer, one wine',()=>{
        checkout().should("be.disabled")
        colaButton().click()
        beerButton().click()
        wineButton().click()
        checkout().should("be.enabled")
        totalText().should("contain.text","€6.25")
    })
})
describe("Age tests",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/#!/")
    })
    it('Anyone orders cola',()=>{
        checkout().should("be.disabled")
        colaButton().click()
        checkout().should("be.enabled")
        checkout().click()
        order().should("be.enabled")
        order().click()
        ageAlert().should("not.exist")
        confirmationMsg().should("contain.text","Coming right up! ~bzzzt~")
    })
    it('Underage orders beer',()=>{
        checkout().should("be.disabled")
        beerButton().click()
        checkout().should("be.enabled")
        checkout().click()
        order().should("be.disabled")
        ageInput().click().type("17")
        order().should("be.enabled")
        order().click()
        ageAlert().should("not.be.hidden")
    })
    it('Adult orders beer',()=>{
        checkout().should("be.disabled")
        beerButton().click()
        checkout().should("be.enabled")
        checkout().click()
        order().should("be.disabled")
        ageInput().click().type("19")
        order().should("be.enabled")
        order().click()
        ageAlert().should("not.exist")
        confirmationMsg().should("contain.text","Coming right up! ~bzzzt~")
    })
})