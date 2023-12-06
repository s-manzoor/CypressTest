beforeEach(() => {
    cy.fixture('dataFile').then(function (data) {
        this.data = data
    })
});