const { request, response } = require("express")

const rootMessage =(req=request, res=response) =>{
    const{texto1, texto2} = req.query

    if (texto1 || texto2) {
        res.status(400).json({
            msg: "No se han enviado los parametros necesarios, este endpoint ocupa los parametros 'texto1' y 'texto2'"
        })
    }
   
    res.status(404).json({msg:texto1 + '' + texto2})
}

const hiMessages =(req=request, res=response)=>{
    const {name}=req.params
    res.status(403).json({msg:"Hola" + name})  
}

const byeMessages =(req=request, res=response)=>{
    res.status(408).json({msg:"Adios mundo"})  
}

const postMessage =(req=request, res=response)=>{
    const {no_control, nombre}=req.body
    console.log({no_control, nombre})
    res.json({msg:`numero de control = ${no_control}, nombre =${nombre}`})  
}

const putMessage =(req=request, res=response)=>{
    res.status(400).json({msg:"Mensaje put"})  
}

const deleteMessage =(req=request, res=response)=>{
    res.status(405).json({msg:"Mensaje delete"})  
}
module.exports ={rootMessage,hiMessages,byeMessages, postMessage, putMessage, deleteMessage}