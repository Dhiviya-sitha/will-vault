const mongoose = require("mongoose");

const willSchema = new mongoose.Schema(
  {
    willId: {
      type: String,
      required: true,
      unique: true,
    },

    testatorName: {
      type: String,
      required: true,
    },

    testatorId: {
      type: String,
      required: true,
    },

    executorName: {
      type: String,
      required: true,
    },

    custodian: {
      type: String,
      required: true,
    },

    version: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "SUPERSEDED", "PENDING_VERIFICATION"],
      default: "ACTIVE",
    },

    documentHash: {
      type: String,
    },

    deathVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Will", willSchema);