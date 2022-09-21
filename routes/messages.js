const{Router} = require("express")
const router = Router()

//router.get("",()=> {})
router.get("/",(req,res)=> {
    res.send("Hello World")
}) //END POINT

module.exports = router