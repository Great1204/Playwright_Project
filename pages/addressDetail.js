import { expect } from "@playwright/test"
import { BaseClass } from "./BaseClass"
import { LoginPage } from "./LoginPage"
import { Launch } from "./LaunchPage"
import { View_Cart } from "./View_Cart"


export class AddressDetails{

    constructor(page){
        this.page=page
        this.lan = new Launch(page)
        this.vcart = new View_Cart(page)
        this.add_delivery = page.locator('#address_delivery')
        this.add_bill = page.locator('#address_invoice')
        this.acart_prod_img =page.locator('.cart_product')
        this.acart_price=page.locator('.cart_price')
        this.acart_desc=page.locator('.cart_description')
        this.acart_qnty=page.locator('.cart_quantity')
        this.acart_total=page.locator('.cart_total')
        //this.acart_total_price=page.locator('.cart_total_price')
        this.acart_plc_odr = page.getByRole('link',{name : 'Place Order'})
         this.bp = new BaseClass(page)
        //this.cout_Modal = page.locator('#checkoutModal')
        this.cout_Modal = page.getByRole('heading',{name : 'Checkout'})
        this.cout_reglogin = page.getByRole('link',{name : 'Register / Login'})
        this.lp = new LoginPage(page)



        
    }
   
    async place_order(){
        if(await this.add_delivery.isVisible()){
            console.log("DelAddress")
            await expect(this.add_bill).toBeVisible();
            console.log("BillAddress")
            // await expect(this.acart_prod_img).toBeVisible();
            // console.log("img")
            // await expect(this.acart_desc).toBeVisible();
            // console.log("description")
            // await expect(this.acart_price).toBeVisible();  
            // console.log("Price") 
            // await expect(this.acart_qnty).toBeVisible();
            // console.log("Quantity")
            // await expect(this.acart_total).toBeVisible();
            // console.log("total")
            // //await expect(this.acart_total_price).toBeVisible();
            // console.log("totprice")
            await this.bp.placeorder_getrow()
            await this.acart_plc_odr.click();

        }
        else
            await this.checkout_Modallogin()
    }
     async checkout_Modallogin(){
       
        await expect(this.cout_Modal).toBeVisible()
        await this.cout_reglogin.click()
        await  this.lp.login('gg234567g3@gmail.com','Nila@123')
        await this.lan.cart()
        await this.vcart.proceed_checkout()
        await this.place_order()

    }
     async cheout_ModalCont(){
        await expect(this.cout_Modal).toBeVisible()

        await this.cout_cont.click()
     }
}