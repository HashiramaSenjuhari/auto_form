import puppteer from "puppeteer"

let id = process.env.K_ID

async function main(){
  try {
    if(!id){
      throw new Error("Please set up env for K_ID")
    }
    let browser = await puppteer.launch(
      {
        headless:false
      }
    )
    let page = await browser.newPage()
  
    await page.goto("https://forms.zohopublic.in/Kalvium/form/Signup/formperma/GeJFMLBDfoWlIJfhI46Qyx0Dlf3kHhMSRsvMItq_Riw?zf_lang=en")
    await page.waitForNetworkIdle()
    let email = await page.$("input[inputmode=\"email\"]")
    await email.type("hari.prasath@kalvium.community")
   
    await page.click("input[name=\"Date\"]")
    await page.click(".ui-datepicker-days-cell-over.ui-datepicker-today")
  
    let accept = await page.$("label[for=\"TermsConditions-input\"]")
    await accept.click()
    let next = await page.$("button[elname=\"next\"]")
    await next.click()
  
    await sleep(4000)
    let selection = await page.$("span[role=\"combobox\"]")
    await selection.click()
    await sleep(3000)
    await page.locator("li::-p-text(\"Work Integrated - Simulated\")").click()
  
    await page.locator("textarea").fill("Learning")
    await sleep(3000)
    let button = await page.$("button[aria-label=\"NextNavigates to page3out of5\"]")
    await button.click()
  
    await sleep(4000)
    let slider1 = await page.$("a[elname=\"sliderPointLast\"]")
    await slider1.click()
  
    // await sleep(1000)
    await page.locator("textarea[id=\"MultiLine1-arialabel\"]").fill("learning to learn")
    await page.locator("button[aria-label=\"NextNavigates to page4out of5\"]").click()
  
    await sleep(4000)
    await page.locator("div[id=\"sld-Slider2\"] > a[elname=\"sliderPointLast\"]").click()
  
    await page.locator("textarea[id=\"MultiLine5-arialabel\"]").fill("learning to learn")
    await page.locator("button[aria-label=\"NextNavigates to page5out of5\"]").click()
  
    await sleep(1000)
    await page.locator("button[elname=\"submit\"]").click()
  
    await page.close()
    await browser.close()
  }catch(error){
    console.log(error.message)
  }
}

main()

async function sleep(great){
  return new Promise(resolve => setTimeout(resolve,great))
}
