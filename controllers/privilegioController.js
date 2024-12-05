import privilegio from '../models/privilegio.js'
import Privilegio from '../models/privilegio.js'

//Método Get
export async function getPrivilegio (req,res){
    const privilegios= await Privilegio.find()

    res.json(privilegios)

}



// Método Post
export async function postPrivilegio (req, res)  {
    let msg = 'Privilegio insertado'
    
    const body = req.body
    
    try {
              
        const privilegio = new Privilegio(body)
        await privilegio.save() // Guardar en la base de datos el empleado

    
        
        
    } catch (error) {
        msg = error.message
    }
    
    res.json({ msg: msg })
}

//Método PUT

export async function putPrivilegio (req,res){
    const {_id,estado_privilegio}=req.body
    let msg='Privilegio actualizado'
    try{

        const updateData = {};
        
        if (estado_privilegio !== undefined) updateData.estado_privilegio = estado_privilegio;

        await privilegio.findByIdAndUpdate(_id, updateData, {new:true})
        
    
} catch(error){
 msg=error
}
res.json({msg:msg})
}

//Método DELETE

export async function deletePrivilegio (req,res){
    let msg='Privilegio borrado'
      const id=req.params.id
    try{

       const privilegioBorrado = await privilegio.findByIdAndDelete({_id:id})
       

       if(!privilegioBorrado){
        msg='Privilegio no encontrado'
        return res.status(404).json({msg:msg})
       }



    } catch (error) {
        msg=error.message
        return res.status(500).json({msg:msg})

    }
    res.json({msg:msg})
}


