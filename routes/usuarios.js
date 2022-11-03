const {Router} = require("express");
const {getUser, getUserByID, deleteUserByID, addUser, updateUserByUsuario, sigIn} = require("../controllers/usuarios")
const router = Router()

router.get("/", getUser)
router.get("/id/:id", getUserByID)

//DELETE
router .delete("/", deleteUserByID)
router.post("/", addUser)
router.post("/sigin", sigIn) //Añadido recientemente

///PUT///
router.put("/", updateUserByUsuario)

module.exports=router