const {Router} = require("express");
const {getUser, getUserByID, deletewUserByID} = require("../controllers/usuarios")
const router = Router()

router.get("/", getUser)
router.get("/id/:id", getUserByID)

router .delete("/", deletewUserByID)

module.exports=router