import mongoose from "mongoose";

const applySchema = new mongoose.Schema(
   {
      job: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Job",
         required: true,
      },
      applicant: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },

      resume: { type: String },
      coverLetter: { type: String },
      applicationStatus: {
         type: String,
         enum: ["Submitted", "In Review", "Rejected", "Interview Scheduled"],
         default: "Submitted",
      },
   },
   { timestamps: true }
);

export const Apply = mongoose.Model("Apply", applySchema);
