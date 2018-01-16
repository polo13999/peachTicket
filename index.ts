import * as puppeteer from 'puppeteer'



(async function go() {
  //console.log(MyKey)

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    //userDataDir: "./userData/"

  });
  const page = await browser.newPage();


  // await watchDog;
  let currentScreen = await page.evaluate(() => {
    return {
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    };
  });
  //設定預設網頁頁面大小
  await page.setViewport(currentScreen);

  try {
    await page.goto('https://booking.flypeach.com/tw')

    await page.waitForSelector(".modal-close");
    const handle = await page.$('.modal-close');
    //console.log(handle)
    await handle.click();
    //await page.waitForNavigation({});
    //await page.evaluate(el => el.href, handle);
    //await page.waitForSelector('.js_modal_backdrop', { visible: true, timeout: 10000 });
    //console.log('test1')
    // await page.waitForSelector('#js_modal_appeal > div > div > a');
    // console.log('test2')
    // await page.click('#js_modal_appeal > div > div > a');
    // console.log('test3')
    // await page.waitForSelector('.input_airport-modal_trigger');
    // await page.click('.input_airport-modal_trigger');
    // await page.waitForSelector('.select_airport-airport khh-o js_selectable', { visible: true, timeout: 2000 });
    // await page.click('.select_airport-airport khh-o js_selectable');


  } catch (err) {
    console.log('err')
    console.log(err)
  }
  //await browser.close();
})()
