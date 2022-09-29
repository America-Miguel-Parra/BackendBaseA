const{Router} = require("express")
const router = Router()
const {rootMessage, hiMessages, byeMessages, postMessage,deleteMessage, putMessage} = require ('../controllers/messages.js')


//router.get("",()=> {})
router.get("/",rootMessage) //END POINT

router.get("/hi/:name",hiMessages) //END POINT

router.get("bye",byeMessages) //END POINT

router.post('/',postMessage)

router.put('/',putMessage)

router.delete('/',deleteMessage)

module.exports = router