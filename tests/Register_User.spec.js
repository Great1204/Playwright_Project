import { Enter_Acc_Info } from "../pages/EnterAccountInformation";
import { Launch } from "../pages/LaunchPage";
import { LoginPage } from "../pages/LoginPage";
import {test, expect} from '@playwright/test'

test('Register the New User',async ({page})=>{

 const laun= new Launch(page)
 await test.step("Launched the URL sucessfully", async()=>
 await laun.navigate())
 await laun.Signup_login()

 const login_link=new LoginPage(page)
 await test.step("LoginLink Clicked Successfully", async()=>{
 await login_link.login_signup('ga6576yu','gg267g3@gmail.com')

 })

 const Enter_detail = new Enter_Acc_Info(page)
 await test.step("Account Detailed are filled", async()=>{
 await Enter_detail.signUp('Nila@123','20','April','1993','Gayathri','G','address','India','Tamilnadu','chennai','600116','765654653')

 })
})

test.only('Register User with existing email',async ({page})=>{

 const laun= new Launch(page)
 await test.step("Launched the URL sucessfully", async()=>
 await laun.navigate())
 await laun.Signup_login()

 const login_link=new LoginPage(page)
 await test.step("LoginLink Clicked Successfully", async()=>{
 await login_link.login_signup('gayu','ggg@gmail.com')
 await expect(login_link.err_email).toBeVisible()


 })
})