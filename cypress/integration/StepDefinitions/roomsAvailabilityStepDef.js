/// <reference types="Cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePageActions from "../../PageObjects/PageMethods/HomePageActions";

const homePage = new HomePageActions()


Given(/^the user is on the home page$/, () => {
	cy.visit("https://www.guestreservations.com")
});

When(/^select a place from the Top Destinations section$/, function () {
	homePage.selectDestination(this.data.destination)
});

When(/^select a hotel and enters check-in and check-out detes$/, function () {
	homePage.selectHotel(this.data.hotel)
	homePage.enterCheckinDate(this.data.checkinDate)
	homePage.enterCheckoutDate(this.data.checkoutDate)
});

Then(/^available rooms are displayed$/, () => {
	homePage.roomAvailability()
});
