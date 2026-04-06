import{test,expect} from "@playwright/test"
import { Launch } from "../pages/LaunchPage"
import { ProductPage } from "../pages/ProductPage"

test("Verify All Product & Product Details",async({page})=>{
    const lan = new Launch(page)
    await lan.navigate()
    await lan.allProduct()
    const prodPage =new ProductPage(page)
    await prodPage.listProd()
})