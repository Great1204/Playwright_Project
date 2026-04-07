import {Launch} from '../pages/LaunchPage'
import {HomePage} from '../pages/HomePage'
import {test, expect} from '@playwright/test'

test("Verify The Subscription Functionality",async({page})=>{
    const lan = new Launch(page)
    await lan.navigate()
    const hp = new HomePage(page)
    await hp.subscription('gggh@getMaxListeners.com')
})
