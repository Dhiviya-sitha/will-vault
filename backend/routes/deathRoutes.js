const express = require("express");

const {
  requestDeathVerification,
  verifyDeath,
} = require("../controllers/deathController");

const router = express.Router();

router.post("/:willId/request", requestDeathVerification);

router.post("/:willId/verify", verifyDeath);

module.exports = router;