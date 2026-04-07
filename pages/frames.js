export class Frames{
    constructor(page){
        this.page = page
        
        // this.frames =page.locator('[title="Advertisement"]')
        this.frm_close = page.locator('[class="close-button"]')
   
    }
    async framesEncounter(){
    
        // console.log(frames.length())
        // for(const frame of this.frames){
        // console.log(frame)
        // await expect(frame).toContain(this.frames)
        // }
        await this.frm_close.click()

    }
}