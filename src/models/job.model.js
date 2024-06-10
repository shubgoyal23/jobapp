import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         require: true,
      },
      description: {
         type: String,
         required: true,
      },
      company: {
         type: String,
         required: true,
      },
      location: {
         type: {
            type: String,
            enum: ["Remote", "On-site"],
         },
         city: { type: String },
         state: { type: String },
         country: { type: String },
      },
      requirements: [String],
      benefits: [String],
      employmentType: {
         type: String,
         enum: ["Full-time", "Part-time", "Contract"],
      },
      salary: {
         type: Number,
      },
      seniorityLevel: {
         type: String,
      },
      industry: {
         type: String,
      },
      postedBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
      applicationDeadline: {
         type: Date,
      },
   },
   { timestamps: true }
);

export const Job = mongoose.Model("Job", jobSchema);
