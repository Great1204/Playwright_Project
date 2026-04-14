export class BaseClass {
    constructor(page) {
        this.page = page
        this.cart_tbrows = page.locator('#cart_info_table tbody tr')
        this.acart_plc_odr = page.getByRole('link',{name : 'Place Order'})
        this.grandtotal = page.locator('.cart_total_price')
        this.cout_cont =this.page.getByRole('button',{name : 'Continue On Cart'})
       
    }

    async entertext(locator, input){
        await locator.fill(input);
    }

    async cart_getrow(){
        const cart_rowcount = await this.cart_tbrows.count()
        const results = []
        for (let i = 0; i < cart_rowcount; i++) {

            const row = this.cart_tbrows.nth(i)
            const product_name = (await row.locator('.cart_product').textContent()).trim()
            const description = (await row.locator('.cart_description').textContent()).trim()

            const priceText = await row.locator('.cart_price').textContent()
            const quantityText = await row.locator('.cart_quantity').textContent()
            const totalText = await row.locator('.cart_total').textContent()

            const price = parseInt(priceText.replace(/[^0-9]/g, ''))
            const quantity = parseInt(quantityText)
            const total = parseInt(totalText.replace(/[^0-9]/g, ''))
            results.push({
                name: product_name,
                description,
                price,
                quantity,
                total
            })
            if ((price * quantity) !== total) {
                console.log(`Product not added properly: ${product_name}`)
            }
        }
        return results
    }
    async placeorder_getrow() {
            let exp_grandTotal = 0
            const cartdata =await this.cart_getrow()
             
            for (const data of cartdata) {
            exp_grandTotal += data.total 
            }
        
            const gt= await (this.grandtotal.last()).textContent()
            const g_total = parseInt(gt.replace(/[^0-9]/g,''))

            if (exp_grandTotal !== g_total) {
            console.log('Product not added properly')
            }

        return {cartdata, exp_grandTotal}
       
    }
    async checkout_Modallogin() {
        if (await this.cout_Modal.isVisible()) {
            await this.cout_reglogin.click()
        }
    }


    
}