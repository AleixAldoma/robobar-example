import {Given} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
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
} from "../cartPage";

function addColas(n){
    let btn = colaButton()
    for(let i=0;i<n;i++){
        btn.click()
    }
}
function addBeers(n){
    let btn = beerButton()
    for(let i=0;i<n;i++){
        btn.click()
    }
}
function addWines(n){
    let btn = wineButton()
    for(let i=0;i<n;i++){
        btn.click()
    }
}
function addDrinks(nColas,nBeers,nWines){
    addColas(nColas)
    addBeers(nBeers)
    addWines(nWines)
}

Given('user opens robobar website',()=>{
    cy.visit('http://localhost:3000/#!/')
})

When('user adds a cola',()=>{
    colaButton().click()
})
When('user adds {int} colas',(n)=>{
    addColas(n)
})
When('user adds a beer',()=>{
    beerButton().click()
})
When('user adds {int} beers',(n)=>{
    addBeers(n)
})
When('user adds a wine',()=>{
    wineButton().click()
})
When('user adds {int} wines',(n)=>{
    addWines(n)
})
When('user adds {int} cola {int} beer {int} wine',(nColas,nBeers,nWines)=>{
    addDrinks(nColas,nBeers,nWines)
})

Then('total should be €{float}',(total)=>{
    totalText().should('contain.text',total)
})
Then('user checks out',()=>{
    checkout().click()
})
Then('user is {int} years old',(age)=>{
    ageInput().click().type(age)
})
Then('checkout result is {string}',(exp)=>{
    order().click()
    if(exp=="pass"){
        ageAlert().should('not.exist')
        confirmationMsg().should("contain.text","Coming right up! ~bzzzt~")
    }
    if(exp=="fail") ageAlert().should('exist')
})