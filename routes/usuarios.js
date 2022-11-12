const {Router} = require("express");
const {getUser, getUserByID, deleteUserByID, addUser, updateUserByUsuario, signIn, NuevaContrasena} = require("../controllers/usuarios")
const router = Router()


//GET
router.get("/", getUser)
router.get("/id/:id/",getUserByID)//http://localhost:4000/api/v1/usuarios/id/11

//DELETE
router.delete("/",deleteUserByID)// http://localhost:4000/api/v1/usuarios/?id=1


///PUT///
router.put("/", updateUserByUsuario)

//POST
router.post("/", addUser)
router.post("/signin", signIn) //Añadido recientemente
router.post("/nuevacontrasena", NuevaContrasena)



module.exports=router