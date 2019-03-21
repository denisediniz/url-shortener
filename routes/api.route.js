const express = require('express')
const apiController = require('../controllers/api.controller')

const router = express.Router()

router.post('/new', apiController.dataCreate)
router.get('/:urlId', apiController.dataRead)

module.exports = router