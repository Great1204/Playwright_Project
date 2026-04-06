import { Launch} from "../pages/LaunchPage";
import { ContactUS } from "../pages/contactUsPage";
import{test,expect} from '@playwright/test';

test("Validate the Contact US",async({page})=>{
   
    const launch =new Launch(page)
    await test.step("URL Lauched Successfully",async()=>
    await launch.navigate())
    await test.step('Contactus Clicked sucessfully',async()=>
    await launch.contactUs()) 
    
    const con_us = new ContactUS(page)
    await test.step('navigated to contact US Pages',async()=>
    await con_us.contactussubmit('gayathri','ggg2@gmail.com','Poor quality','I received a bad Quality product')
    
)

})


