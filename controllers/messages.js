const rootMessage =(req, res) =>{
    res.send('Mensajes')
}

const hiMessages =(req, res)=>{
    res.send('Hola mundo')  
}

const byeMessages =(req, res)=>{
    res.send('Adios mundo')  
}

module.exports ={rootMessage,hiMessages,byeMessages}