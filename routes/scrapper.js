const express = require('express')

const router= express.Router()

router.get("/scrap", async (req, res) => {
  
  
  res.send("hmm")
})

module.exports = router