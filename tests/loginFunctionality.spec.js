import { HomePage } from "../pages/HomePage";
import { Launch } from "../pages/LaunchPage";
import { LoginPage } from "../pages/LoginPage";
import{ test, expect} from'@playwright/test';


test('Login with incorrect email & password',async({page})=>{

 const laun= new Launch(page)
 await test.step("Launched the URL sucessfully", async()=>
 await laun.navigate())
 await laun.Signup_login()

 const login = new LoginPage(page)
 await test.step('Login Failed Successfully', async()=>{
    await login.login('gg7g3@65gmail.com','Nila@123')
    await expect(login.err_login).toBeVisible()
 })


})
test('Login with correct email & password',async({page})=>{

 const laun= new Launch(page)
 await test.step("Launched the URL sucessfully", async()=>
 await laun.navigate())
 await laun.Signup_login()


 const login = new LoginPage(page)
 await test.step('Login Successfully', async()=>{
 await login.login('gg234567g3@gmail.com','Nila@123')

 })
})
test('Login & Logout',async({page})=>{

//Launch
 const laun= new Launch(page)
 await test.step("Launched the URL sucessfully", async()=>
 await laun.navigate())
 await laun.Signup_login()


//Login
 const login = new LoginPage(page)
 await test.step('Login Failed Successfully', async()=>{
 await login.login('gg234567g3@gmail.com','Nila@123')
 
//Logout
 await test.step('Logout performed successfully',async()=>{
 await laun.logout()
 })

 })
})