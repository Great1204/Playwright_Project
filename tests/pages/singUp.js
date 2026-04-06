import { details } from "../../utils/testData";


class UserLogin{

constructor(){
    this.page = page;

    this.loginOption = this.page.locator('[href="/login"]')

    this.name = page.locator('//input[@name="name"]')
    this.emailId = page.locator('[data-qa="signup-email"]')
    this.signUpBtn = page.getByRole('button',{name:'Signup'})
}

async gotoBrowser(){
    await this.page.goto("https://automationexercise.com/");
}

async logIn(){


}

async signUp(){
await this.loginOption.click();
await this.page.waitForLoadState('load')

await this.name.fill(details.username)
await this.emailId.fill(details.email)
await this.signUpBtn.click();

}



}






