import * as puppeteer from 'puppeteer'

function getPosition(element) {
  var x = 0;
  var y = 0;
  // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
  while (element) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }
  return { x: x, y: y };
}

(async function go() {
  //console.log(MyKey)

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    //userDataDir: "./userData/"
  });
  const page = await browser.newPage();

  await page.setUserAgent(`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36`)
  console.log('test use agent')
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
    //    await page.waitForSelector(".modal-close");
    await page.mouse.down();
    await page.mouse.up();

    var obj = await page.evaluate(() => {
      function getPosition(element) {
        var x = 0;
        var y = 0;
        // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
        while (element) {
          x += element.offsetLeft - element.scrollLeft + element.clientLeft;
          y += element.offsetTop - element.scrollLeft + element.clientTop;
          element = element.offsetParent;
        }
        return { x: x, y: y };
      }
      return getPosition(document.querySelector('.input_airport-modal_trigger'));
    });
    await page.mouse.move(obj.x, obj.y);



  } catch (err) {
    console.log('err')
    console.log(err)
  }
  //await browser.close();
})()







//測試碼


// const param: any = { delay: 1000 }
    // //await page.mouse.down(param);
    // await page.mouse.click(obj.x, obj.y)
    // //await page.mouse.up();


//   // const data: any = document.querySelector(".modal-close");
    //   // data.click();
    //   // const data1: any = document.querySelector('.input_airport-modal_trigger');
    //   // data1.click();


// await page.type('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(1) > div > div > div > span > label > input', '高雄')
    // await page.click('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(2) > div > div > div > span > label > input')
    // await page.type('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(2) > div > div > div > span > label > input', '大阪')


    // const mouse = page.mouse;
    // let objtest = await page.$('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(1) > div > div > div > span > label > a')
    // console.log(objtest)
    // const mouseData = getPosition(objtest)
    // //await mouse.move(mouseData.x, mouseData.y);
    // await mouse.click(mouseData.x, mouseData.y)





    // await page.waitForSelector('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(1) > div > div > div > span > label > a');

    // var test = await page.$('#js_wrapper > div.content-c > div.input_flight-c > div > div > div > ul > li:nth-child(1) > div > div > div > span > label > a');
    // test.click();





    // await page.waitForNavigation({});
    // await page.evaluate(el => el.href, handle);
    // await page.waitForSelector('.js_modal_backdrop', { visible: true, timeout: 10000 });
    // console.log('test1')
    // await page.waitForSelector('#js_modal_appeal > div > div > a');
    // console.log('test2')
    // await page.click('#js_modal_appeal > div > div > a');
    // console.log('test3')
    // await page.waitForSelector('.input_airport-modal_trigger');
    // await page.click('.input_airport-modal_trigger');
    // await page.waitForSelector('.select_airport-airport khh-o js_selectable', { visible: true, timeout: 2000 });
    // await page.click('.select_airport-airport khh-o js_selectable');
