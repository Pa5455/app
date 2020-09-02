"use strict";

const express = require("express");
const router = express.Router();
const assessmentlist = require("./controllers/assessmentlist.js");


const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");


router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get("/assessmemtlist/:id", assessmentlist.index)

module.exports = router;
