import bcrypt from 'bcryptjs'
import Usuario from '../models/usuario.js' 
import generateJWT from '../helpers/generateJWT.js'



export async function getUsuario(req,res){
    const usuarios= await Usuario.find()

    res.json(usuarios)
}

export async function postUsuario(req,res){
    const body= req.body
    try{
        const usuario=new Usuario(body)
        usuario.contrasena=await bcrypt.hash(body.contrasena, 10)
        //bcrypt
    
        await usuario.save()
        res.status(200).json({msg: 'Usuario creado satisfactoriamente'})
    } catch (error){
        
        res.status(500).json({msg: error})

    }
}





export async function iniciarSesion(req,res) {
    const  {correo,contrasena}=req.body
    try {
        const usuario= await Usuario.findOne({correo})
        if(!usuario) {
        res.status(404).json({
            exitoso:false,
            msg:'Correo o contrasena no encontrada'})
        
        }
        else{
            const usuarioLogueado= await bcrypt.compare(contrasena, usuario.contrasena) //Comparar contraseñas
            if(usuarioLogueado){
                
                const token=await generateJWT(usuario)
                res.cookie('token',token)
                res.status(200).json({
                    exitoso:true,
                    msg:'Sesión iniciada con éxito'}) //Generate a token
           }
           else{
            res.status(404).json({msg:'Usuario o contrasena no encontrada'})

           }
        }
    }catch(error){
        res.status(500).json({msg:error})


    }
}

