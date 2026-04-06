import {expect}from "@playwright/test";

export class ProductPage{
    constructor(page){
        this.page = page;

        this.txt_allprod = page.getByRole('heading',{name: 'All Products'})
        this.allprodList = page.locator('[class="col-sm-4"]')
        this.list_prod = page.locator('[href="/product_details/1"]')
        this.products_names = page.locator('.productinfo p')
        this.prod_head = page.getByText('Blue Top')
        this.prod_p = page.getByText('Category: Women > Tops')
        this.prod_price = page.getByText('Rs. 500')
        this.prod_avail = page.getByText('In Stock')
        this.prod_cond = page.getByText (' New')
        this.prod_brand = page.getByText(' Brand: Polo')



    }
    async listProd(){
        await expect(this.txt_allprod).toBeVisible()
        const prod_count =await this.allprodList.count()
        const prod_list =await this.list_prod.allTextContents()
        const prod_name = await this.products_names.all()
        console.log(prod_count)
        console.log(prod_list)
        console.log(prod_name)
        const f_prod = await this.list_prod.first()
        await f_prod.click()
        await expect(this.prod_head).toBeVisible()
        await expect(this. prod_p).toBeVisible()
        await expect(this.prod_price).toBeVisible()
        await expect(this.prod_avail).toBeVisible()
        await expect(this.prod_cond).toBeVisible()
        await expect(this.prod_brand).toBeVisible()
        // await expect().toBeVisible()
        // await expect().toBeVisible()
        
        }

        
    }

