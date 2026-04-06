export class Enter_Acc_Info{
    constructor(page){
        this.page=page;
        this.titl=page.getByLabel('Mrs.')
        this.name =page.locator('input[name="name"]')
        this.email =page.locator('#email')
        this.password = page.locator('#password')
        this.day =page.locator('#days')
        this.month =page.locator('#months')
        this.year=page.locator('#years')
        this.cb_news=page.getByLabel('Sign up for our newsletter!')
        this.cb_offer =page.getByLabel('Receive special offers from our partners!')
        this.first_name=page.locator('#first_name')
        this.last_name =page.locator('#last_name')
        this.address1=page.locator('#address1')
        this.country=page.locator('#country')
        this.state=page.locator('#state')
        this.city =page.locator('#city')
        this.zipcode=page.locator('#zipcode')
        this.mobile_num=page.locator('#mobile_number')
        this.create_acc= page.getByRole('button',{name:'Create Account'})
        this.acc_created =page.getByText('Account Created!')
        this.continue =page.locator('[data-qa="continue-button"]')
    }

async signUp(expectedName, expectedEmail, pass,day,mon,yr,fname,lname,add1,country,state,city,zipcode,mobile){
        await this.titl.click()
        await expect(this.name).toHaveValue(expectedName);
        await expect(this.email).toHaveValue(expectedEmail)
        await this.password.fill(pass)
       const pass_db = await this.password.inputValue();
        await this.day.selectOption(day)
        await this.month.selectOption(mon)
        await this.year.selectOption(yr)
        await this.cb_news.check();
        await this.cb_offer.click()
        await this.first_name.fill(fname)
        await this.last_name.fill(lname)
        await this.address1.fill(add1)
        await this.locator(this.country).selectOption(country)
        await this.state.fill(state)
        await this.city.fill(city)
        await this.zipcode.fill(zipcode)
        await this.mobile_num.fill(mobile)
        await this.create_acc.click();
        await expect(this.acc_created).toBeVisible()
        await this.continue.click()
        console.log("Clicked")

}

}