import { Router } from 'express'
import controller from './controllers'

const router = Router()

router.post('/new', controller.dataCreate)

router.get('/:urlId', controller.dataRead)

export default router