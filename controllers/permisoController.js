import Permiso from '../models/permiso.js'

//Método Get
export async function getPermiso (req,res){
    const permisos= await Permiso.find()

    res.json({permisos})

}




// Método Post
export async function postPermiso (req, res)  {
    let msg = 'Permiso insertado'
    
    const body = req.body
    
    try {
              
        const permiso = new Permiso(body)
        await permiso.save() // Guardar en la base de datos el permiso

    
        
        
    } catch (error) {
        msg = error.message
    }
    
    res.json({ msg: msg })
}

//Método PUT

export async function putPermiso(req, res) {
    const { _id, nombre_permiso, estado_permiso } = req.body
    let msg = 'Permiso actualizado'
    try {
        
        const updateData = {};
        
        if (nombre_permiso !== undefined) updateData.nombre_permiso = nombre_permiso;
        if (estado_permiso !== undefined) updateData.estado_permiso = estado_permiso;

        await Permiso.findByIdAndUpdate(_id, updateData, {new:true}) 
        
    } catch(error) {
        msg = error.message
    }
    res.json({ msg: msg })
}

//Método DELETE

export async function deletePermiso (req,res){
    let msg='Permiso borrado'
      const id=req.params.id
    try{

       const permisoBorrado = await Permiso.findByIdAndDelete({_id:id})
       

       if(!permisoBorrado){
        msg='Permiso no encontrado'
        return res.status(404).json({msg:msg})
       }



    } catch (error) {
        msg=error.message
        return res.status(500).json({msg:msg})

    }
    res.json({msg:msg})
}


