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
  },

  image: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("Book",bookSchema);
