const { request, response } = require("express")

const rootMessage =(req=request, res=response) =>{
    res.status(404).json({msg:"Mensajes"})
}

const hiMessages =(req=request, res=response)=>{
    res.status(403).json({msg:"Hola mundo"})  
}

const byeMessages =(req=request, res=response)=>{
    res.status(408).json({msg:"Adios mundo"})  
}

const postMessage =(req=request, res=response)=>{
    res.status(401).json({msg:"Mensaje POST"})  
}

const putMessage =(req=request, res=response)=>{
    res.status(400).json({msg:"Mensaje put"})  
}

const deleteMessage =(req=request, res=response)=>{
    res.status(405).json({msg:"Mensaje delete"})  
}
module.exports ={rootMessage,hiMessages,byeMessages, postMessage, putMessage, deleteMessage}