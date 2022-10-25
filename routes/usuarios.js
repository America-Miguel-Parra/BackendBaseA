const {Router} = require("express");
const {getUser, getUserByID, deletewUserByID, addUser} = require("../controllers/usuarios")
const router = Router()

router.get("/", getUser)
router.get("/id/:id", getUserByID)

//DELETE
router .delete("/", deletewUserByID)
router.post("/", addUser)

module.exports=router