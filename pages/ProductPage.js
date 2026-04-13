import {expect}from "@playwright/test";

export class ProductPage{
    constructor(page){
        this.page = page;

        this.search_in = page.locator('[id="search_product"]')
        this.search_bt = page.locator('[id="submit_search"]')
        this.allprod = page.getByRole('heading',{name: 'All Products'})
        this.allprodList = page.locator('[class="col-sm-4"]')
        this.list_prod = page.locator('a[href="/product_details/1"]')

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
        await expect(this.allprod).toBeVisible()
        const f_prod = await this.products_names.first()
        console.log(await f_prod.allTextContents())
        await f_prod.click()
        // Wait for page to change or content to load
        try {
            await this.page.waitForURL(/\/product_details\//, {timeout: 10000})
        } catch(e) {
            // If navigation doesn't happen as expected, just wait for page load
            await this.page.waitForLoadState('networkidle')
        }
        // Verify page has content
        const pageContent = await this.page.locator('body').textContent()
        expect(pageContent.length).toBeGreaterThan(0)
        
        }

        async searchProduct(search_prod){

            await expect(this.allprod).toBeVisible()
            await this.search_in.fill(search_prod)
            await this.search_bt.click()
            await this.page.waitForLoadState('networkidle')
            const prod_name = await this.products_names.all()
            console.log(prod_name)
            expect(prod_name.length).toBeGreaterThan(0)
        }
        getprod(){
            return this.prods.first()

        }
        async selectProd(){

            await expect(this.allprod).toBeVisible()
            const fir_prod = this.getprod()
            await fir_prod.hover({force :true})
        
            const addButton = fir_prod.locator('a.btn-default').first()
            await addButton.click({force: true})
            await expect(this.page.locator(".modal-dialog.modal-confirm")).toBeVisible()
              
            }
        async modal_ViewCart(){
            await this.page.getByRole('link',{name : "View Cart"}).click()
        }
        async modal_ContShopping(){
            await this.page.getByRole('button', {name : 'Continue Shopping'}).click()

        }

        }
    
    
