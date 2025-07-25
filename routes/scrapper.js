const express = require('express')

const router= express.Router()

router.get("/scrap", async (req, res) => {
  
  
  res.send("hmm hmm")
})

module.exports = router