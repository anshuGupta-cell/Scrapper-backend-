const express = require('express')
const puppeteer = require('puppeteer-core')
const chromium = require('@sparticuz/chromium-min')

const router= express.Router()

router.get("/scrap", async (req, res) => {
  
  
  res.send("hmm hmm")
})

module.exports = router