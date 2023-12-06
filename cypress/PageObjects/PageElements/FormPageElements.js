class FormPageElements{

    element = {
        fieldFirstName : () => cy.get('.jsv-firstname'),
        fieldLastName : () => cy.get('.jsv-lastname'),
        fieldEmail : () => cy.get('#email'),
        fieldContact : () => cy.get('#phone'),
        fieldAddress : () => cy.get('#bill_address'),
        fieldCity : () => cy.get('#bill_city'),
        fieldZipCode : () => cy.get('#bill_zip'),
        fieldCardFirstName : () => cy.get('#bill_first'),
        fieldCardLastName : () => cy.get('#bill_last'),
        fieldCardNumber : () => cy.get('#credit_card_number'),
        fieldYear : () => cy.get('#cc_expyear'),
        fieldSelectYear : () => cy.get('.dropdown-item'),   
        fieldSecurityCode : () => cy.get('#credit_card_verification')
    }

}
export default FormPageElements;