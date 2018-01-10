const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  const url = 'file:///' + __dirname + '/index.html'
  await page.goto(url)
  //await browser.close()
})();