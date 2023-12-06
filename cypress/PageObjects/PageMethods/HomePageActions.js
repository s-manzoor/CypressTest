
import HomePageElements from "../PageElements/HomePageElements"

const homeElements = new HomePageElements()

class HomePageActions {

    enterCheckinDate(date) {
        cy.wait(1000)
        homeElements.element.btnCheckin().click()
        //cy.wait(2000)
        //homeElements.element.btnCheckin().nextUntil(homeElements.element.datePicker())
        homeElements.element.datePicker().should('be.visible')
        return homeElements.element.selectCheckin(date).click()
    }
    enterCheckoutDate(date) {
        homeElements.element.btnCheckout().click();
        return homeElements.element.selectCheckout(date).click();
    }
    dateValidation(checkinDate, checkoutDate) {
        homeElements.element.btnCheckin().should('have.value', checkinDate)
        return homeElements.element.btnCheckout().should('have.value', checkoutDate)
    }
    selectRoom() {
        homeElements.element.btnFindRoom().contains('Find Rooms').click()
        cy.wait(15000)
        homeElements.element.errorMessage().should('not.exist')
        return homeElements.element.btnBookNow().contains('Book now').click()
    }

    selectDestination(destination) {
        homeElements.element.selectDestination().contains(destination).click({ force: true })
    }
    selectHotel(hotelName) {
        homeElements.element.selectHotel().contains(hotelName).click()
    }
    roomAvailability() {
        homeElements.element.btnFindRoom().contains('Find Rooms').click()

    }


}
export default HomePageActions