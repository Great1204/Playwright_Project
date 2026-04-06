import { expect } from "@playwright/test";

export class ContactUS{
    constructor(page){
        this.page= page

        this.c_us = page.getByRole('heading',{name:'Contact'})
        this.c_gintouch = page.getByRole('heading',{name:'Get In Touch'})
        this.c_name =  page.locator('[class="form-control"]').nth(1)
        this.c_email =  page.locator('[class="form-control"]').nth(2)
        this.c_sub =  page.locator('[class="form-control"]').nth(3)
        this.c_message =  page.locator('[data-qa="message"]')
        this.c_upload =  page.locator('[name="upload_file"]')
        this.c_submit=page.locator('[data-qa="submit-button"]')
    }

async contactussubmit(c_name1,c_email1,c_sub1,c_message1){
       
        await expect(this.c_us).toBeVisible()
        await expect(this.c_gintouch).toBeVisible()
        await this.c_name.fill(c_name1)
        await this.c_email.fill(c_email1)
        await this.c_sub.fill(c_sub1)
        await this.c_message.fill(c_message1)
        await this.c_upload.setInputFiles('/Users/gayathri726/Documents/Interview Preparation/G Gayathri.pdf')
        await this.page.waitForTimeout(1000)
        await this.c_submit.click()
    }

}