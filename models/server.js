const express= require('express')
const dbConnect=require('../database/config')
require('../database/config')
const {getPermiso,postPermiso,putPermiso,deletePermiso}=require('../controllers/permisoController')


class Server{
    constructor(){
        this.app=express()
        this.listen()
        this.dbConnection()
        this.pathPermiso='/api/permiso'
        this.route()
        
        
        
    }
    async dbConnection(){ //Llamar funcion dbConenction a la base de datos
    await dbConnect()
    }

    route(){
        this.app.use(express.json()) //Parsear datos
        this.app.get(this.pathPermiso, getPermiso)
        this.app.post(this.pathPermiso, postPermiso)
        this.app.put(this.pathPermiso, putPermiso)
        this.app.delete(this.pathPermiso+'/:permiso_id', deletePermiso)
       
    }
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log('Server running')
        })
    }
}

module.exports= Server //Exports the class server