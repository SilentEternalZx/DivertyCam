const mongoose=require('mongoose') //Dependencia que nos permite hacer transacciones hacia Mongo

const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connected to database')
    }catch(error){
        console.log(error)
    }
}
module.exports=dbConnect //Exportar función dbConnect
