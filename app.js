//const express = require('express') FORMA VIEJA DE IMPORTAR
import express from 'express'

//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT)

//app Es la variable que almacena todas las funcionalidades de express 
const app = express()


//ATENDIENDO PETICIONES Y RESPONDIENDO

//1. PETICION DE TIPO GET para buscar todas las habitaciones
app.get('/hotelesNick/habitaciones', function (req, res) {
    res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
})

//2. PETICION DE TIPO GET para buscar habitacion por ID
app.get('/hotelesNick/habitacion/:id', function (req, res) {
    res.send('ESTOY BUSCANDO HABITACION POR ID')
})


//3. PETICION DE TIPO POST para agregar habitacion en BD
app.post('/hotelesNick/habitacion', function (req, res) {
    res.send('ESTOY AGREGANDO UNA HABITACION')
})

//4. PETICION DE TIPO PUT para editar una habitacion
app.put('/hotelesNick/modificarhabitacion', function (req, res) {
    res.send('ESTOY ACTUALIZANDO UNA HABITACION')
})


//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT,function(){
    console.log("SERVIDOR ENCENDIDO")
})