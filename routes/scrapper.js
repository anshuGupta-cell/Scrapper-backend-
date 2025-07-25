const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");

chromium.setGraphicsMode = false;

(async () => {
  await chromium.font(
    "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
  );
})();

router.get("/scrap", async (req, res) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1280, height: 800 },
    executablePath: await chromium.executablePath(),
    headless: "shell"
  });

  const page = await browser.newPage();
  await page.goto("https://google.com");
  const pageTitle = await page.title();
  await browser.close();

  res.send(`Page title: ${pageTitle}`);
});

module.exports = router;