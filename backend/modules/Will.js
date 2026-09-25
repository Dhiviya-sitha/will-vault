const mongoose = require("mongoose");

const willSchema = new mongoose.Schema(
  {
    willId: {
      type: String,
      required: true,
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
      required: true,
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

    deathVerificationStatus: {
      type: String,
      enum: ["NOT_VERIFIED", "PENDING", "VERIFIED"],
      default: "NOT_VERIFIED",
    },

    deathVerifiedAt: {
      type: Date,
    },

    beneficiaries: [
      {
        name: {
          type: String,
          required: true,
        },
        identifier: {
          type: String,
          required: true,
        },
        relationship: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Will || mongoose.model("Will", willSchema);