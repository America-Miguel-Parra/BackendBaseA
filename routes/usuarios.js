const {Router} = require("express");
const {getUser, getUserByID, deleteUserByID, addUser, updateUserByUsuario, signIn, NuevaContrasena} = require("../controllers/usuarios")
const router = Router()

router.get("/", getUser)
router.get("/id/:id", getUserByID)

//DELETE
router .delete("/", deleteUserByID)

//POST
router.post("/", addUser)
router.post("/signin", signIn) //Añadido recientemente
router.post("/nuevacontrasena", NuevaContrasena)

///PUT///
router.put("/", updateUserByUsuario)

module.exports=router