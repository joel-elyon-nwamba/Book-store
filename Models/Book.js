const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  available: {
    type: Boolean,
  }
});


module.exports = mongoose.model("Book",bookSchema);
