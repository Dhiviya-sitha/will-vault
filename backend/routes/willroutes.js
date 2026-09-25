const express = require("express");

const {
  createWill,
  getWills,
} = require("../controllers/willcontrollers");

const router = express.Router();

router.post("/", createWill);
router.get("/", getWills);

module.exports = router;