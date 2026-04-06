 import {expect}from '@playwright/test'
 export class HomePage{
    constructor(page){
        this.page =page;

        this.Login_confirm = page.getByText('Logged in as')
      //  this.women=page.getByText('Women');
        this .women =page.getByRole('link', { name: ' Women' })
        this.women_dress= page.getByRole('link',{name:'Dress'});
        this.product2=page.locator('a[href="/product_details/4"]')
        this.select_cart=page.locator('[type="button"]')
        this.added_tocart = page.getByRole('heading',{name:'Added!'})
        this.viewcart = page.getByText('View Cart')
        this.subscr = page.getByRole('heading',{name: 'Subscription'})
        this.sub_email = page.locator('[id="susbscribe_email"]')
        this.sub_arrow = page.locator('[id="subscribe"]')
        this.sub_message = page.getByText('You have been successfully subscribed!')
    
        
    }
    async H_page(){
        await expect(this.Login_confirm).toBeVisible();
        console.log("Login_confirm")
        await this.women.click();
        await this.women_dress.click();
        await this.product2.click();
        await this.select_cart.click();
        await expect(this.added_tocart).toBeVisible()
        await this.viewcart.click()

        console.log("Homen Page completed")

    }
    async subscription(sub_email1){
        await expect(this.subscr).toBeVisible()
        await this.sub_email.fill(sub_email1)
        await this.sub_arrow.click()
        await expect(this.sub_message).toBeVisible()

    }
  
 }