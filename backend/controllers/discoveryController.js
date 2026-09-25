const Will = require("../modules/Will");
const AuditLog = require("../modules/AuditLog");

const discoverWill = async (req, res) => {
  try {
    const { willId } = req.params;

    const will = await Will.findOne({
      willId,
      status: "ACTIVE",
    });

    if (!will) {
      return res.status(404).json({
        success: false,
        message: "Active Will not found",
      });
    }

    // Security check
    if (will.deathVerificationStatus !== "VERIFIED") {
      return res.status(403).json({
        success: false,
        message: "Will discovery is not available before verified death",
      });
    }

    await AuditLog.create({
      action: "WILL_DISCOVERED",
      willId,
      performedBy: req.body.performedBy || "AUTHORIZED_USER",
      details: "Will metadata accessed after death verification",
    });

    res.status(200).json({
      success: true,
      message: "Will discovered successfully",
      data: {
        willId: will.willId,
        testatorName: will.testatorName,
        executorName: will.executorName,
        custodian: will.custodian,
        version: will.version,
        status: will.status,
        beneficiaries: will.beneficiaries,
        deathVerificationStatus: will.deathVerificationStatus,
        deathVerifiedAt: will.deathVerifiedAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  discoverWill,
};