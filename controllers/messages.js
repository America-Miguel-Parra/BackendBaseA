const rootMessage =(req, res) =>{
    res.send('Mensajes')
}

const hiMessages =(req, res)=>{
    res.send('Hola mundo')  
}

const byeMessages =(req, res)=>{
    res.send('Adios mundo')  
}

const postMessage =(req, res)=>{
    res.send('Menjaje POST')  
}

const putMessage =(req, res)=>{
    res.send('Menjate put')  
}

const deleteMessage =(req, res)=>{
    res.send('Menjaje delete')  
}
module.exports ={rootMessage,hiMessages,byeMessages, postMessage, putMessage, deleteMessage}