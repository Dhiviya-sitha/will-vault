const express = require("express");

const {
  createNewVersion,
  getWillVersions,
} = require("../controllers/versionController");

const router = express.Router();

router.post("/:willId/new", createNewVersion);

router.get("/:willId", getWillVersions);

module.exports = router;