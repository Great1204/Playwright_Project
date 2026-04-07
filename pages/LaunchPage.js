import{expect}from '@playwright/test'

export class Launch{
    constructor(page){
        this.page=page;
        this.loginLink = page.getByText('Signup / Login');
        this.viewcart = page.getByText("View Cart")
        this.log_out = page.locator('[href="/logout"]')
        this.contact_us = page.locator('[href="/contact_us"]')
        this.ts_case = page.getByRole('link', { name: ' Test Cases' })
        this.txt_testCase =page.getByRole('heading',{name : 'Test Cases',exact :true})
        this.all_product = page.locator('[href="/products"]')
        this.txt_allprod = page.getByRole('heading',{name: 'All Products'})

        
    }
     async navigate(){
        await this.page.goto('https://automationexercise.com/')           

        }
    async Signup_login(){
        await this.loginLink.click()

        }
      async logout(){
       await this.log_out.click()

        }
    async contactUs(){
        await this.contact_us.click()
        
        }
    async testCase(){
        await this.ts_case.click()
        await expect(this.txt_testCase).toBeVisible()

        }
        async allProduct(){
        await this.all_product.click()
        await expect(this.txt_allprod).toBeVisible()


        }

}