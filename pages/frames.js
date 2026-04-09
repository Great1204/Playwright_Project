// export class Frames{
//     constructor(page){
//         this.page = page
        
//         this.frames =page.locator('[title="Advertisement"]')
//         this.frm_close = page.locator('[class="close-button"]')
//         //[id="aswift_3"]
//         //[class="continue-prompt-text"]
   
//     }
//     async framesEncounter(){
    
//         // console.log(frames.length())
//         // for(const frame of this.frames){
//         // console.log(frame)
//         // await expect(frame).toContain(this.frames)
//         // }
        
//        try{
//         await this.page.frameLocator(this.frames)

//        }catch(err){

//        }

//     }
// }


import {test as base} from "@playwright/test"

export const test = base.extend({
    page : async ({page} , use) => {
        await page.route("**/*" , (route)=>{
            const url =  route.request().url();

            if(/google_vignette/.test(url)){
                return route.abort()
            }
            return route.continue();
        })

await use(page)
        
    }
    
})





