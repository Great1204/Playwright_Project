import { Launch } from "../pages/LaunchPage";
import{ test,expect} from "@playwright/test"

test("Verify the TestCase Page Succesasfully", async ({page})=>{
    const lan = new Launch(page)

    await test.step('navigate to Url',async()=>{
    await lan.navigate()
    })
    await test.step('Click the TestCase link',async()=>{
    await lan.testCase()
})


})