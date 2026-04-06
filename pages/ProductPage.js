import {expect}from "@playwright/test";

export class ProductPage{
    constructor(page){
        this.page = page;

        this.txt_allprod = page.getByRole('heading',{name: 'All Products'})
        this.allprodList = page.locator('[class="col-sm-4"]')
        this.list_prod = page.locator('[class="productinfo text-center"]')
        this.product_names = page.locator('.productinfo p')

    }
    async listProd(){
        await expect(this.txt_allprod).toBeVisible()
        const prod_count =await this.allprodList.count()
        const prod_list =await this.list_prod.allTextContents()
        await this.waitForTimeout(1500)
        const prod_name = await this.product_names.all()
        console.log(prod_count)
        console.log(prod_list)
        console.log(prod_name)
        await this.waitForTimeout(1500)
        const f_prod = await this.list_prod.first()
        await this.waitForTimeout(1500)

        await f_prod.click()
        }

        
    }

