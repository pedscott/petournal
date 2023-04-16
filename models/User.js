const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    default: "/src/img/default-avatar.png",
  },

  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"]
  },

});

UserSchema.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

module.exports = mongoose.model("User", UserSchema);