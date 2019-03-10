import { Router } from 'express'
import apiController from '../controllers/api.controller'

const router = Router()

router.post('/new', apiController.dataCreate)
router.get('/:urlId', apiController.dataRead)

export default router