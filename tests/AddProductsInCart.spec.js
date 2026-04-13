import{Launch} from '../pages/LaunchPage'
import{ProductPage} from'../pages/ProductPage'
import{test, expect}from '@playwright/test'
import { View_Cart } from '../pages/View_Cart'
import { BaseClass } from '../pages/BaseClass'
import { AddressDetails } from '../pages/addressDetail'

test('Adding Products In Cart', async ({page})=>{
    const lan = new Launch(page)
    await lan.navigate()
    await lan.allProduct()
    const pp = new ProductPage(page)
    await pp.selectProd()
    await pp.modal_ViewCart()
    const vc =new View_Cart(page)
    await vc.proceed_checkout()
    const ad = new AddressDetails(page)
    await ad.place_order()

    
    

})



