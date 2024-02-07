const express = require("express");
const personais = require("./personaisRoute");

module.exports = (app) => {
  app.use(
    express.json(),
    personais
  )
};
