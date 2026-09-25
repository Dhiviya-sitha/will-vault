const express = require("express");

const {
  createAuditLog,
  getAuditLogs,
} = require("../controllers/auditController");

const router = express.Router();

router.post("/", createAuditLog);
router.get("/", getAuditLogs);

module.exports = router;