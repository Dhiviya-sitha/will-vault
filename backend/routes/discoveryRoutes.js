const express = require("express");

const {
  discoverWill,
} = require("../controllers/discoveryController");

const router = express.Router();

router.get("/:willId", discoverWill);

module.exports = router;