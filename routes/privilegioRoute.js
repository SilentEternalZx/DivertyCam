import {Router } from 'express'
import {getPrivilegio, postPrivilegio, putPrivilegio, deletePrivilegio}   from '../controllers/privilegioController.js'


const privilegioRouter=Router()


privilegioRouter.get('/',getPrivilegio)
privilegioRouter.post('/',postPrivilegio)
privilegioRouter.put('/',putPrivilegio)
privilegioRouter.delete('/:id',deletePrivilegio)

export default privilegioRouter