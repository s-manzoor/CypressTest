Feature: Rooms Availability

    Scenario: Rooms availability at the top destinations.
        Given the user is on the home page
        When select a place from the Top Destinations section
        And select a hotel and enters check-in and check-out detes
        Then available rooms are displayed