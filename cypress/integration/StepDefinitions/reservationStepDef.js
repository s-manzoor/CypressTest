/// <reference types="Cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePageActions from "../../PageObjects/PageMethods/HomePageActions";
import FormPageActions from "../../PageObjects/PageMethods/FormPageActions";

const homePage = new HomePageActions()
const formPage = new FormPageActions()

Given('Open the website', function () {
    cy.visit(this.data.mainURL)
})

When('Select the Check-in and Check-out dates', function () {
    homePage.enterCheckinDate(this.data.checkinDate);
    homePage.enterCheckoutDate(this.data.checkoutDate);
})

When('Select the room from the available list', function () {
    homePage.selectRoom()
})

Then('Fill out the form and submit it successfully', function () {

    formPage.enterFirstName(this.data.firstName)
    formPage.enterLastName(this.data.lastName)
    formPage.enterEmail(this.data.email)
    formPage.enterPhone(this.data.phone)
    formPage.enterAddress(this.data.address)
    formPage.enterCity(this.data.city)
    formPage.enterZipCode(this.data.zipCode)
    formPage.enterCardFirstName(this.data.firstName)
    formPage.enterCardLastName(this.data.lastName)
    formPage.enterCardNumber(this.data.cardNumber)
    formPage.enterExpiryYear(this.data.expiryYear)
    formPage.enterSecurityCode(this.data.securityCode)
    formPage.submitForm()
    formPage.formValidation()


})