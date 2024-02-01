import mongoose from "mongoose";

const thoughtModel = new mongoose.Schema(
  {
    publisher: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Thougths = mongoose.model("thoughtslist", thoughtModel);

export default Thougths;