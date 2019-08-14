const express = require("express");
const { getacard, postcard, getdesc } = require("../Controller/agentcontroller");
const fs = require("fs");
let agentrouter = express.Router();
agentrouter
  .route("/")
  .get(getacard)
  .post(postcard);
agentrouter
  .route("/:id")
  .get(getdesc);
module.exports = agentrouter;
