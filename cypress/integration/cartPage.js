function colaButton(){
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function beerButton(){
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function wineButton(){
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}
function totalText(){
    return cy.get(':nth-child(4) > .ng-binding')
}
function checkout(){
    return cy.get('.col-12 > .btn')
}
function ageInput(){
    return cy.get('#ageInput')
}
function order(){
    return cy.get('.btn-success')
}
function ageAlert(){
    return cy.get(':nth-child(2) > :nth-child(1) > .alert')
}
function confirmationMsg(){
    return cy.get('p')
}

exports.colaButton=colaButton
exports.beerButton=beerButton
exports.wineButton=wineButton
exports.totalText=totalText
exports.checkout=checkout
exports.ageInput=ageInput
exports.order=order
exports.ageAlert=ageAlert
exports.confirmationMsg=confirmationMsg
