const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/login')  
  next()
})

router.get('/', loginController.index)

module.exports = router