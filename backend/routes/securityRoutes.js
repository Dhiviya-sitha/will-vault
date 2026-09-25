const express = require("express");
const generateHash = require("../utils/hash");

const router = express.Router();

router.post("/hash", (req, res) => {
  try {
    const { document } = req.body;

    if (!document) {
      return res.status(400).json({
        success: false,
        message: "Document content is required",
      });
    }

    const hash = generateHash(document);

    res.status(200).json({
      success: true,
      message: "Document hash generated successfully",
      hash: hash,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;