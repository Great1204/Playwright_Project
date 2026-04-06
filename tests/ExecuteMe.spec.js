import{test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Enter_Acc_Info } from "../pages/EnterAccountInformation";
import { Launch } from "../pages/LaunchPage";
import { HomePage } from "../pages/HomePage";
import { View_Cart } from "../pages/View_Cart";
import { AddressDetails } from "../pages/addressDetail";

test('Login test',async({page})=>{

    const lanuch = new Launch( page)
    await test.step('Launch_url',async()=>{
        await lanuch.navigate()
    })
    // LoginLink Page
    const login = new LoginPage(page)
     await test.step('Login_Link' , async()=>{
     await login.login_signup('hri','gg66hdg3@gail.com')
    })

    // EnterAccopuntInformation        
    const signup= new Enter_Acc_Info(page)
    await signup.signUp('Nilla123@','4','1','2014','gayathri','G','porur','India','TamilNadu','Chennai','65656',"98786857")
  
    //HomePage
    const home_pg = new HomePage(page);
    await home_pg.H_page()

    //View Cart
    const v_cart = new View_Cart(page)
    await v_cart.proceed_checkout();

    //Place Order
    const plc_order =new AddressDetails(page)
    await plc_order.place_order();



})


