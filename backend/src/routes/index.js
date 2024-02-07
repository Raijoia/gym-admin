const express = require("express");
const personais = require("./personaisRoute.js");
const clientes = require("./ClientesRoute.js");
const treinos = require("./TreinosRoute.js");

module.exports = (app) => {
  app.use(
    express.json(),
    personais,
    clientes,
    treinos
  )
};
