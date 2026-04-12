import {expect}from "@playwright/test";

export class ProductPage{
    constructor(page){
        this.page = page;

        this.search_in = page.locator('[id="search_product"]')
        this.search_bt = page.locator('[id="submit_search"]')
        this.allprod = page.getByRole('heading',{name: 'All Products'})
        this.allprodList = page.locator('[class="col-sm-4"]')
        this.list_prod = page.locator('a,[href="/product_details/1"]')

        this.products = page.getByText('View Product')
        this.products_names = page.locator('.productinfo p')
        this.prod_head = page.getByText('Blue Top')
        this.prod_p = page.getByText('Category: Women > Tops')
        this.prod_price = page.getByText('Rs. 500')
        this.prod_avail = page.getByText('In Stock')
        this.prod_cond = page.getByText (' New')
        this.prod_brand = page.getByText(' Brand: Polo')
        this.prods = page.locator('[class="product-image-wrapper"]')
        this.overlay_cart = page.locator('[data-product-id="1"]')
        this.modallay = page.locator('#cartModal')
    }
    
    async listProd(){
        await this.page.pause()
        await expect(this.allprod).toBeVisible()
        const f_prod = await this.products_names.first()
        console.log(await f_prod.allTextContents())
        await f_prod.click()
        await expect(this.prod_head).toBeVisible()
        await expect(this. prod_p).toBeVisible()
        await expect(this.prod_price).toBeVisible()
        await expect(this.prod_avail).toBeVisible()
        await expect(this.prod_cond).toBeVisible()
        await expect(this.prod_brand).toBeVisible()
        
        }

        async searchProduct(search_prod){

            await expect(this.txt_allprod).toBeVisible()
            await this.search_in.fill(search_prod)
            await this.search_bt.click()
            const prod_name = await this.products_names.all()
            console.log(prod_name)
            for(const ele of prod_name){
            expect(ele.toLowerCase()).toContain(search_prod.toLowerCase())

            }
        }
        getprod(){
            return this.prods.first()

        }
        async selectProd(){

            await expect(this.txt_allprod).toBeVisible()
            await this.list_prod.allTextContents()
            const fir_prod = this.getprod()
            await fir_prod.hover({force :true})
            await fir_prod.locator('.fa').first().click({force :true})
                        await this.page.pause()

            await this.modallay.waitFor({state : 'visible'})
            await this.page.pause()

                    

        }
    
    }
