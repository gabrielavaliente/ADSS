const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ProductSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    productState: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  
    contact: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: {
      type: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          timestamp: {
            type: Date,
            required: true,
          },
          history: {
            type: [String],
            default: [],
          },
        },
      ],
      default: [],
    },
  
  }, { timestamps: true });


  module.exports= Mongoose.model("Product",ProductSchema)