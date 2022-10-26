const {Router} = require("express");
const {getUser, getUserByID, deleteUserByID, addUser} = require("../controllers/usuarios")
const router = Router()

router.get("/", getUser)
router.get("/id/:id", getUserByID)

//DELETE
router .delete("/", deleteUserByID)
router.post("/", addUser)

module.exports=router