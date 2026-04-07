import{Launch} from '../pages/LaunchPage'
import{ProductPage} from'../pages/ProductPage'
import{test, expect}from '@playwright/test'

test('Adding Products In Cart', async ({page})=>{
    const lan = new Launch(page)
    await lan.navigate()
    await lan.allProduct()
    const pp = new ProductPage(page)
    pp.selectProd()


})



