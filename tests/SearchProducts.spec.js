import { Launch } from '../pages/LaunchPage'
import { HomePage }  from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import {test,expect } from'@playwright/test'

test("Validate the search Function",async ({page})=>{
    const lan = new Launch(page)
    await lan.navigate()
    await lan.allProduct()

     const prod_p =new ProductPage(page)

    await prod_p.searchProduct('Tshirt')
})


