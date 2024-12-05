import {Router} from  'express'
import {iniciarSesion} from '../controllers/usuarioController.js'

const autRouter=Router()

autRouter.post('/',iniciarSesion)

export default autRouter







