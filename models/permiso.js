const {model,Schema}=require('mongoose') //Crear modelo y trabajar con los esquemas

const PermisoSchema =new Schema({
    permiso_id:{
       type:Number, //Tipo dato
       required:[true,'El id es requerido'], //Requerido
      
    },

    
    descripcion:{
        type:String, //Tipo dato
        required:[true,'La descripción es requerida'], //Requerido
        
     },
    fecha_creacion:{
        type:Date,
        required:[true,'La fecha es requerida'] 
     },
     estado_permiso:{
        type:Boolean,
        required:[true, 'El permiso es requerido']
     }
   
    }
)
module.exports=model('Permiso', PermisoSchema, 'Permiso') //Crea la colección y si no existe exporta el modelo