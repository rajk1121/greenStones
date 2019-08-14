const express = require("express");
const { getacard, postcard, getdesc, postdesc } = require("../Controller/reviewcontroller.js");
const fs = require("fs");
let reviewrouter = express.Router();
reviewrouter
    .route("/")
    .get(getacard)
    .post(postcard);

reviewrouter.route("/postdesc").post(postdesc);
reviewrouter
    .route("/:id")
    .get(getdesc);
module.exports = reviewrouter;
