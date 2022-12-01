'use strict'

var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl');

var api = express.Router();

api.post('/registro', UsuarioControl.registrarUsuario);
api.get('/probando-controlador', UsuarioControl.prueba);
api.post('/login', UsuarioControl.accesoUsuario);

module.exports = api;

