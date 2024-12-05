import {Router} from 'express'
import { postUsuario } from '../controllers/usuarioController.js'
import { getUsuario } from '../controllers/usuarioController.js'

const usuarioRouter=Router()

usuarioRouter.post('/',postUsuario)
usuarioRouter.get('/',getUsuario)

export default usuarioRouter