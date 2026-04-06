import{expect} from '@playwright/test'
export class View_Cart{
    constructor(page){
        this.page =page;
        this.cart_Home=page.getByText(' Home');
        this.cart_product= page.getByText('Products')
        this.cart_Logout =page.getByText(' Logout')
        this.cart_Del_Acc = page.locator('/delete_account')
       // this.cart_proc_checkout=page.locator('.btn btn-default check_out')
       //this.cart_proc_checkout =page.getByRole('link',{name : /Proceed/i})
        this.cart_proc_checkout = page.locator('.check_out')
        this.cart_del_img = page.locator("fa fa-times")

    }

    async proceed_checkout(){
        console.log("viewCart Started")
        //await this.cart_proc_checkout.waitFor({ state: 'visible' });
        //console.log(await this.page.content());
        await this.cart_proc_checkout.click();
        console.log("view Csrt Completed");
        
    
    }
}