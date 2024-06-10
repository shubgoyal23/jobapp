import mongoose, { Schema } from "mongoose";

const DetailSchema = new mongoose.Schema(
   {
      userId: {
         type: Schema.Types.ObjectId,
         ref: "users",
      },
      summary: {
         type: String,
      },
      skills: {
         type: [String],
      },
      experience: [
         {
            title: { type: String },
            company: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String },
         },
      ],
      social: {
         type: [String]
      },
   },
   {
      timestamps: true,
   }
);

export const Detail = mongoose.model("Detail", DetailSchema);
