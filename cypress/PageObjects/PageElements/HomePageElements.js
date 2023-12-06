class HomePageElements{
    element = {

        btnCheckin : () => cy.get('#check_in_view'),
        btnCheckout : () => cy.get('#check_out_view'),
        //selectDate : () => cy.get('.day'), 
        selectCheckin : (date) => cy.get('.datepicker-days tr:eq(4) td:eq('+date+')'), 
        selectCheckout : (date) => cy.get('.datepicker-days tr:eq(4) td:eq('+date+')'),
        btnFindRoom : () => cy.get('.btn-warning'),
        btnBookNow : () => cy.get('a[role=button]'),
        datePicker : () => cy.get('.datepicker'),
        errorMessage : () => cy.get('#w0'),
        selectDestination: () => cy.get('.figure').find('.card-name'),
        selectHotel : () => cy.get('.row')

    }

}

export default HomePageElements;