import { model, Schema } from 'mongoose' //Crear modelo y trabajar con los esquemas

const usuarioSchema = new Schema ({
    correo : {
        type:String,
        required: [true, 'The email is required'],
        unique: [true, 'The email is unique'],
        minlenght:[10, 'Min 10 characters'],
        maxlenght:[25, 'Max 25 characters']


    },

    contrasena:{
        type: String,
        required: [true, 'The password is required'],
        minlenght:[10, 'min 10 characters']

    }

},
    {   
        timestamps:true, // To audit, save type and time of the transaction
        versionkey:false
    }

)

export default model('Usuario',usuarioSchema, 'Usuario')