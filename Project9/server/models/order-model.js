const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  id: { type: String },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: [
    {
      item: { type: String, required: true },
      cost: { type: Number, required: true },
    },
  ],
  people: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("order", OrderSchema);
