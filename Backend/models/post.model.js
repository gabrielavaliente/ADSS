const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PupilajeSchema = new Schema({
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
  pupilajeState: {
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
  water: {
      type: String,
      
    },
    electricity: {
      type: String,
      
    },
    internet: {
      type: String,
    
    },
  
  mapLink: {
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



module.exports = Mongoose.model("Pupilaje",PupilajeSchema);