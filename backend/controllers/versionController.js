const Will = require("../modules/Will");

const createNewVersion = async (req, res) => {
  try {
    const { willId } = req.params;

    // Find the current active version
    const currentWill = await Will.findOne({
      willId,
      status: "ACTIVE",
    }).sort({ version: -1 });

    if (!currentWill) {
      return res.status(404).json({
        success: false,
        message: "Active Will not found",
      });
    }

    // Mark old version as superseded
    currentWill.status = "SUPERSEDED";
    await currentWill.save();

    // Create new version
    const newVersion = await Will.create({
      willId: currentWill.willId,
      testatorName: req.body.testatorName || currentWill.testatorName,
      testatorId: currentWill.testatorId,
      executorName: req.body.executorName || currentWill.executorName,
      custodian: req.body.custodian || currentWill.custodian,
      version: currentWill.version + 1,
      status: "ACTIVE",
      willText: req.body.willText,
documentHash: req.body.documentHash,
deathVerificationStatus: "NOT_VERIFIED",
      
    });

    res.status(201).json({
      success: true,
      message: "New Will version created successfully",
      data: newVersion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getWillVersions = async (req, res) => {
  try {
    const { willId } = req.params;

    const versions = await Will.find({
      willId,
    }).sort({ version: 1 });

    res.status(200).json({
      success: true,
      data: versions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createNewVersion,
  getWillVersions,
};
