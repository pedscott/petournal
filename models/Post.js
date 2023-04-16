const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  content: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },
  
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],

  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,ref: 'Pet',
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);