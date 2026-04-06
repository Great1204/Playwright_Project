export class LoginPage{
        constructor(page){
            this.page = page;
          //login to your account
            this.email =page.locator('[data-qa="login-email"]')
            this.password =page.locator('[name="password"]')
            this.loginbtn = page.getByRole('button',{name: 'Login'})
            this.err_login=page.getByText('Your email or password is incorrect!')


            //new user signUp!
            this.name = page.locator('[name="name"]')
            this.emailAdd = page.locator('[data-qa="signup-email"]')    
            this.signUp =page.getByRole('button',{name:'Signup'})
            this.err_email= page.getByText('Email Address already exist!')
        }
       
        async login(email1,password){
           await this.email.waitFor({ state: 'visible' });
           await this.email.fill(email1)
           await this.password.fill(password)
           await this.loginbtn.click()
        }
        
        async login_signup(name,email){
            await this.name.fill(name)
            await this.emailAdd.fill(email);
            await this.signUp.click()
        }
}