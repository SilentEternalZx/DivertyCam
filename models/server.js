import express, { json } from 'express'
import dbConnect from '../database/config.js'
import '../database/config.js'
import permisoRouter from '../routes/permisoRoute.js'
import privilegioRouter from '../routes/privilegioRoute.js'
import autRouter from '../routes/aut.Route.js'
import usuarioRouter from '../routes/usuarioRoute.js'
import cors from 'cors'

class Server{
    constructor(){
        this.app=express()
        this.listen()
        this.dbConnection()
        this.pathPermiso='/api/permiso'
        this.pathPrivilegio='/api/privilegio'
        this.pathUsuario='/api/usuario'
        this.route()
        
        
        
    }
    async dbConnection(){ //Llamar funcion dbConenction a la base de datos
    await dbConnect()
    }

    route(){
        this.app.use(json()) //Parsear datos
        this.app.use(cors())
        this.app.use(this.pathPermiso, permisoRouter)
        this.app.use(this.pathPrivilegio, privilegioRouter)
        this.app.use(this.pathUsuario, usuarioRouter)
        this.app.use('/iniciarsesion',autRouter)
    }
    
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log('Server running')
        })
    }
}

export default Server //Exports the class server