const{Router} = require("express")
const router = Router()
const {rootMessage, hiMessages, byeMessages} = require ('../controllers/messages.js')


//router.get("",()=> {})
router.get("/",rootMessage) //END POINT

router.get("/hi",hiMessages) //END POINT

router.get("bye",byeMessages) //END POINT

module.exports = router