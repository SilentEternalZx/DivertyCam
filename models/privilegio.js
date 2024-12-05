import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

// Establece la conexión a MongoDB
const uri ='mongodb+srv://julianrpm18:1234@cluster0.aquekrn.mongodb.net/';
const connection = mongoose.createConnection(uri);

const AutoIncrement = AutoIncrementFactory(connection);

const PrivilegioSchema =new mongoose.Schema({
    privilegio_id:{
       type:Number, //Tipo dato
       unique:true 
      
    },

    descripcion:{
        type:String,
        required:[true,'La descripción es requerida'] //Requerido

    },

    fecha_creacion:{
        type:Date,
        required:[true,'La fecha es requerida'],
        default: Date.now
    },

    estado_privilegio:{
        type:Boolean,
        required:[true, 'El estado es requerido'],
        default:false
    },

    Permisos:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: 'Permiso'
        }
    ]

});

PrivilegioSchema.plugin(AutoIncrement, {inc_field : 'privilegio_id'});

export default connection.model('Privilegio', PrivilegioSchema, 'Privilegio') //Crea la colección y si no existe exporta el modelo

