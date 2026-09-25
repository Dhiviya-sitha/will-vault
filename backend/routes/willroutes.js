const express = require("express");

const {
  createWill,
  getWills,
} = require("../controllers/willController");
const router = express.Router();

router.post("/", createWill);
router.get("/", getWills);

module.exports = router;