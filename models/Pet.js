const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  name: {
    type: String,
    required: true,
  },

  species: {
    type: String,
    required: true,
  },
  
  avatar: {
    type: String,
    default: "/src/img/default-pet-avatar.png",
  },

  bio: {
    type: String,
    default: "",
  }, 

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pet", PetSchema);