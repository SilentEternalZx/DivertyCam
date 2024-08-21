const Permiso = require('../models/permiso')

//Método Get
const getPermiso= async(req,res)=>{
    const permisos= await Permiso.find()

    res.json(permisos)

}



// Método Post
const postPermiso = async (req, res) => {
    let msg = 'Permiso insertado'
    const body = req.body
    
    try {
              
        const permiso = new Permiso(body)
        await permiso.save() // Guardar en la base de datos el empleado

    
        
        
    } catch (error) {
        msg = error.message
    }
    
    res.json({ msg: msg })
}

//Método PUT

const putPermiso=async(req,res)=>{
    const {permiso_id,estado_permiso}=req.body
    let msg='Permiso actualizado'
    try{
        await Permiso.findOneAndUpdate({permiso_id},{estado_permiso})
        
    
} catch(error){
 msg=error
}
res.json({msg:msg})
}

//Método DELETE

const deletePermiso=async (req,res)=>{
    let msg='Permiso borrado'
    permiso_id=req.params.permiso_id
    try{
        await Permiso.findByIdAndDelete({_id:permiso_id})
    } catch (error) {
        msg='Hubo un problema al borrar'

    }
    res.json({msg:msg})
}


module.exports = {
    getPermiso,
    postPermiso,
    putPermiso,
    deletePermiso
}