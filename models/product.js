const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide with a name"],
  },
  price: {
    type: Number,
    required: [true, "please provide with a price"],
  },
  features: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: '{VALUE} is not supported',
    },// company can only be these set of values 
    // enum:['ikea','liddy','caressa','marcos']
  },
});

module.exports = mongoose.model("Product", productSchema);
