import {Router } from 'express'
import {getPermiso, postPermiso, putPermiso, deletePermiso}   from '../controllers/permisoController.js'


const permisoRouter=Router()


permisoRouter.get('/',getPermiso)
permisoRouter.post('/',postPermiso)
permisoRouter.put('/',putPermiso)
permisoRouter.delete('/:id',deletePermiso)

export default permisoRouter