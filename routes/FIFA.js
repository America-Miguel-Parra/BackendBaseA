const {Router} = require("express");
const { getFifa, getFifaByID, deleteFifaByID, addFifa, updateFifaByNombre, signin, nuevaContrasena } = require("../controllers/FIFA");
const router = Router()


//GET
router.get("/", getFifa)
router.get("/id/:id/",getFifaByID)//http://localhost:4000/api/v1/Fifa/id/11


//DELETE
router.delete("/",deleteFifaByID)// http://localhost:4000/api/v1/usuarios/?id=1


//POST
router.post("/", addFifa)


///PUT///
router.put("/", updateFifaByNombre)

module.exports=router