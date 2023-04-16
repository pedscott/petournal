const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  bio: {
    type: String,
    default: "",
  },

  gender: {
    type: boolean,
    default: "",
  },

  dateOfBirth: {
    type: date,
    default: "",
  },

  phoneNumber: {
    type: String,
    default: "",
  },

  address: {
    type: String,
    default: "",
  },

});

module.exports = mongoose.model("Profile", ProfileSchema);