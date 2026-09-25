const Will = require("../modules/Will");
const AuditLog = require("../modules/AuditLog");

const requestDeathVerification = async (req, res) => {
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

    will.deathVerificationStatus = "PENDING";
    await will.save();

    await AuditLog.create({
      action: "DEATH_VERIFICATION_REQUESTED",
      willId,
      performedBy: req.body.performedBy || "SYSTEM",
      details: "Death verification requested",
    });

    res.status(200).json({
      success: true,
      message: "Death verification requested",
      data: will,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const verifyDeath = async (req, res) => {
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

    will.deathVerificationStatus = "VERIFIED";
    will.deathVerifiedAt = new Date();

    await will.save();

    await AuditLog.create({
      action: "DEATH_VERIFIED",
      willId,
      performedBy: req.body.performedBy || "AUTHORIZED_ADMIN",
      details: "Death verification completed",
    });

    res.status(200).json({
      success: true,
      message: "Death verified successfully",
      data: will,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  requestDeathVerification,
  verifyDeath,
};