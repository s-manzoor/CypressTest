/// <reference types="cypress"/>

import HomePageActions from "../PageObjects/PageMethods/HomePageActions"
import FormPageActions from "../PageObjects/PageMethods/FormPageActions"



describe('Guest Reservation', () => {

  before(function () {
    cy.fixture('dataFile').then(function (data) {
      this.data = data
    })
  })

  const homeMethods = new HomePageActions()
  const formPage = new FormPageActions()

  it('Room reservation process', function () {
    const checkIn = this.data.checkinDate
    const checkOut = this.data.checkoutDate
    const FirstName = this.data.firstName
    const LastName = this.data.lastName
    const Email = this.data.email
    const Phone = this.data.phone
    const Address = this.data.address
    const City = this.data.city
    const ZipCode = this.data.zipCode
    const CardNumber = this.data.cardNumber
    const ExpiryYear = this.data.ExpiryYear
    const SecurityCode = this.data.securityCode

    cy.visit("https://www.guestreservations.com/bellagio-las-vegas/booking")
    homeMethods.enterCheckinDate(checkIn)
    homeMethods.enterCheckoutDate(checkOut)
    homeMethods.selectRoom()
    formPage.enterFirstName(FirstName)
    formPage.enterLastName(LastName)
    formPage.enterEmail(Email)
    formPage.enterPhone(Phone)
    formPage.enterAddress(Address)
    formPage.enterCity(City)
    formPage.enterZipCode(ZipCode)
    formPage.enterCardFirstName(FirstName)
    formPage.enterCardLastName(LastName)
    formPage.enterCardNumber(CardNumber)
    formPage.enterExpiryYear(ExpiryYear)
    formPage.enterSecurityCode(SecurityCode)
    formPage.submitForm()
    formPage.formValidation()



  })
})