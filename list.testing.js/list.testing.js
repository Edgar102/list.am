describe('list.am testing',function()
{
    it('site validation',function()
    {
        cy.visit("https://www.list.am/")
        cy.get('#menu>div>div:first-child>span')
        
        //cy.get('#menu>div>div:nth-child(1)>span>div>div>span>a').click()
        cy.get('a[href*="/category/54"]').contains('Անշարժ գույք').click()
        cy.get('a[href*="/category/16"]').contains('Տրանսպորտ').click()
        cy.get('a[href*="/category/4"]').contains('Էլեկտրոնիկա').click()
        cy.go('back')
        cy.reload()
        //cy.get('a[href*="/"]').click()  does not find an element
        cy.get('#l').click()
    })
    
    it('login my page',function()
        {
        cy.get('#ma').click()
        cy.get('#_idyour_email').type('edgar.navasardyan93@mail.ru')
        cy.get('#_idpassword').type('098124090')
        cy.get('#loginaction__form_action0').click()
        cy.get('#ap').click()
        //cy.get('a[href*="#"]').contains("[onclick='return padc.show(this,1,'Marketplace'])'").click()
        cy.get('a[href*="#"]').contains("Առք / Վաճառք").click()

    
        cy.get('a[href*="#"]').contains("Կենցաղային տեխնիկա").click()
        cy.get('a[href*="/add/125"]').contains('Սառնարաններ').click()
        //cy.get('#1').click()
        //cy.get('#ph > div.c > div.node > a:nth-child(1)').click()
        //cy.get('a[href*="/"]')
        cy.reload()
        cy.get('#ph #1').click()
        
        //cy.get('a[href*="/category/116"]').contains("Նոութբուքեր").click()
        //cy.get('#tp > div.dl > a:nth-child(1) > div > div:nth-child(1)').click()
        




        }) 







    })

