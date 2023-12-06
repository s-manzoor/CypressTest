import FormPageElements from "../PageElements/FormPageElements"
import HomePageElements from "../PageElements/HomePageElements"

const formElements = new FormPageElements
const homeElements = new HomePageElements

class FormPageActions {
    enterFirstName(fname) {
        return formElements.element.fieldFirstName().type(fname)
    }
    enterLastName(lname) {
        return formElements.element.fieldLastName().type(lname)
    }
    enterEmail(userEmail) {
        return formElements.element.fieldEmail().type(userEmail)
    }
    enterPhone(phone) {
        return formElements.element.fieldContact().type(phone)
    }
    enterAddress(address) {
        return formElements.element.fieldAddress().type(address)
    }
    enterCity(city) {
        return formElements.element.fieldCity().type(city)
    }
    enterZipCode(zipcode) {
        return formElements.element.fieldZipCode().type(zipcode)
    }
    enterCardFirstName(fname) {
        return formElements.element.fieldCardFirstName().type(fname)
    }
    enterCardLastName(lname) {
        return formElements.element.fieldCardLastName().type(lname)
    }
    enterCardNumber(cardnumber) {
        formElements.element.fieldCardNumber().type(cardnumber)
    }
    enterExpiryYear(year) {
        formElements.element.fieldYear().click()
        return formElements.element.fieldSelectYear().contains(year).click()
    }
    enterSecurityCode(securitycode) {
        return formElements.element.fieldSecurityCode().type(securitycode)
    }
    submitForm() {
        return homeElements.element.btnFindRoom().click()
    }
    fieldValidation(fname) {
        return formElements.element.fieldFirstName().should('have.value', fname)
    }
    formValidation() {
        return homeElements.element.errorMessage().contains('Credit card number or').should('not.exist');
    }
}

export default FormPageActions;