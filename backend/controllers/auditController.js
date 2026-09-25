const AuditLog = require("../modules/AuditLog");

const createAuditLog = async (req, res) => {
  try {
    const { action, willId, performedBy, details } = req.body;

    const log = await AuditLog.create({
      action,
      willId,
      performedBy,
      details,
    });

    res.status(201).json({
      success: true,
      message: "Audit log created successfully",
      data: log,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAuditLog,
  getAuditLogs,
};