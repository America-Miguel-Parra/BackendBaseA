const { request, response } = require("express")

const rootMessage =(req=request, res=response) =>{
    res.json({msg:"Mensajes"})
}

const hiMessages =(req=request, res=response)=>{
    res.json({msg:"Hola mundo"})  
}

const byeMessages =(req=request, res=response)=>{
    res.json({msg:"Adios mundo"})  
}

const postMessage =(req=request, res=response)=>{
    res.json({msg:"Mensaje POST"})  
}

const putMessage =(req=request, res=response)=>{
    res.json({msg:"Mensaje put"})  
}

const deleteMessage =(req=request, res=response)=>{
    res.json({msg:"Mensaje delete"})  
}
module.exports ={rootMessage,hiMessages,byeMessages, postMessage, putMessage, deleteMessage}