const { request, response } = require("express");
const bcryptjs= require("bcryptjs")
const pool = require("../db/connection")
const modeloUsuarios = require("../models/FIFA");

const getFifa = async (req=request, res=response) =>{
    let conn;

    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloUsuarios.queryGetUsers, (error)=>{throw new error})

        if(!users){
            res.status(404).json({msg: "No se encontraron Equipos"})
            return
        }
        res.json({users})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})
        
    } finally {
        if(conn){
            conn.end()
        }

    }


}


const getFifaByID = async (req=request, res=response) =>{
    const {id} = req.params
    let conn;

    try {
        conn = await pool.getConnection()
        
       const [user] = await conn.query(modeloUsuarios.queryGetUserByID, [id], (error)=>{throw new error})

        if(!user){
            res.status(404).json({msg: `No se encontraron equipos con el ID ${id}`})
            return
        }
        res.json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})
        
    } finally {
        if(conn){
            conn.end()
        }

    }


}


const deleteFifaByID = async (req=request, res=response) =>{
    const {id} = req.query
    let conn;

    try {
        conn = await pool.getConnection()
        
        //const [affectedRows] = await conn.query(`UPDATE Usuarios SET Activo = 'N' WHERE = ID ${id}`, (error) => {throw new Error(error)})
        const {affectedRows} = await conn.query(modeloUsuarios.queryDeleteUserByID, [id], (error)=>{throw new error})

        if(affectedRows===0){
           res.status(404).json({msg: `No se pudo eliminar el equipo con el ID ${id}`})
            return
        }
        res.json({msg: `El equipo con el ID ${id} se elimino satisfactoriamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})
        
    } finally {
        if(conn){
            conn.end()
        }

    }


}


const addFifa = async (req=request, res=response) =>{
    const {
        Activo,
        Nombre,
        Liga,
        J_Cham,
        J_Europa,
        Estadio,
        DT
    } = req.body


    if(
        !Activo ||
        !Nombre ||
        !Liga ||
        !J_Cham ||
        !J_Europa ||
        !Estadio ||
        !DT
        ){
            res.status(400).json({msg: "Falta informacion del equipo"})
            return
        }


    let conn;

    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloUsuarios.queryUserExists, [Nombre])

        if (user) {
            res.status(403).json({msg: `El equipo ${Nombre} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloUsuarios.queryAddUser, [
        
            Activo,
            Nombre,
            Liga,
            J_Cham,
            J_Europa,
            Estadio,
            DT
        ], (error)=>{throw new error})

        if(affectedRows===0){
           res.status(404).json({msg: `No se pudo agregar el registro del equipo${Nombre}`})
            return
        }
        res.json({msg: `El equipo con el nombre ${Nombre} se agrego satisfactoriamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
        
    } finally {
        if(conn){
            conn.end()
        }

    }


}


const updateFifaByNombre = async (req=request, res=response) =>{
    const {
        Nombre,
        Liga,
        J_Cham,
        J_Europa,
        Estadio,
        DT

    } = req.body

console.log({
    Nombre,
    Liga,
    J_Cham,
    J_Europa,
    Estadio,
    DT

})
    if (
        !Nombre||
        !Liga||
        !J_Cham||
        !J_Europa||
        !Estadio||
        !DT 
    ){
            res.status(400).json({msg: "Falta informacion del equipo"})
            return
        }


    let conn;

    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloUsuarios.queryGetUserInfo, [Nombre])

        if (!user) {
            res.status(403).json({msg: `El equipo ${Nombre} se actualizo satisfactoriamente.`})
            return
        }



        const {affectedRows} = await conn.query(modeloUsuarios.queryUpdateByUsuario, [ 
            Liga || user.Liga,
            J_Cham || user.J_Cham,
            J_Europa || user.J_Europa,
            Estadio || user.Estadio,
            DT || user.DT,
            Nombre
        ], (error)=>{throw new error})

        if(affectedRows===0){
           res.status(404).json({msg: `No se pudo actualizar el registro del equipo ${Nombre}`})
            return
        }
        res.json({msg: `El equipo ${Nombre} ya se encuentra registrado`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
        
    } finally {
        if(conn){
            conn.end()
        }

    }


}


module.exports={getFifa, getFifaByID, deleteFifaByID, addFifa, updateFifaByNombre}