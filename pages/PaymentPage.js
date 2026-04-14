import {expect}from '@playwright/test'
export class Paymentpage{
    constructor(page){
        this.page = page;
        this.paymenttxt = page.getByRole('heading',{name :'Payment'})
        this.pay_name = page.locator('[data-qa="name-on-card"]')
        this.pay_cardNum = page.locator('.form-control.card-number')
        this.pay_cvv = page.locator('.form-control.card-cvc')
        this.pay_expmn = page.locator ('.form-control.card-expiry-month')
        this.pay_expyr = page.locator('.form-control.card-expiry-year')
        this.pay_confirmorder = page.getByRole('button',{name : 'Pay and Confirm Order'})   
    }


// 

    async payconfirmorder(pay_name1,pay_cardNum1,pay_cvv1,pay_expmon1,pay_expyr1){
        await expect(this.paymenttxt).toBeVisible()
        await this.pay_name.fill(pay_name1)
        await this.pay_cardNum.fill(pay_cardNum1)
        await this.pay_cvv.fill(pay_cvv1)
        await this.pay_expmn.fill(pay_expmon1)
        await this.pay_expyr.fill(pay_expyr1)
        await this.pay_confirmorder.click()


    }
}