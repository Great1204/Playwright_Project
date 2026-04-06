import { expect } from "@playwright/test"

export class AddressDetails{
    constructor(page){
        this.page=page
        this.add_delivery = page.locator('#address_delivery')
        this.add_bill = page.locator('#address_invoice')
        this.acart_prod_img =page.locator('.cart_product')
        this.acart_price=page.locator('.cart_price')
        this.acart_desc=page.locator('.cart_description')
        this.acart_qnty=page.locator('.cart_quantity')
        this.acart_total=page.locator('.cart_total')
        //this.acart_total_price=page.locator('.cart_total_price')
        this.acart_plc_odr = page.getByRole('link',{name : 'Place Order'})
    }
    async place_order(){
        await expect(this.add_delivery).toBeVisible();
        console.log("DelAddress")
        await expect(this.add_bill).toBeVisible();
        console.log("BillAddress")
        await expect(this.acart_prod_img).toBeVisible();
        console.log("img")
        await expect(this.acart_desc).toBeVisible();
        console.log("description")
        await expect(this.acart_price).toBeVisible();  
        console.log("Price") 
        await expect(this.acart_qnty).toBeVisible();
        console.log("Quantity")
        await expect(this.acart_total).toBeVisible();
        console.log("total")
        //await expect(this.acart_total_price).toBeVisible();
        console.log("totprice")
        await this.acart_plc_odr.click();


    }
}