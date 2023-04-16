const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  
  avatar: {
    type: String,
    default: "/src/img/default-group-avatar.png",
  },

  member: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],

});

module.exports = mongoose.model("Group", GroupSchema);