const Will = require("../modules/Will");

// Create a new Will record
const createWill = async (req, res) => {
  try {
    const will = await Will.create(req.body);

    res.status(201).json({
      success: true,
      message: "Will record created successfully",
      data: will,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all Will records
const getWills = async (req, res) => {
  try {
    const wills = await Will.find();

    res.status(200).json({
      success: true,
      data: wills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createWill,
  getWills,
};