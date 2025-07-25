const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer-core");

router.get("/scrap", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      executablePath: './chromium/chrome',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ],
      defaultViewport: { width: 1280, height: 800 }
    });

    const page = await browser.newPage();
    await page.goto("https://google.com");
    const pageTitle = await page.title();
    await browser.close();

    res.send(`Page title: ${pageTitle}`);
  } catch (err) {
    console.error("Error launching browser:", err);
    res.status(500).send("Failed to launch Chromium");
  }
});

module.exports = router;