const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  date: {
    type: String,
  },

  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  comments: [
    {
      text: {
        type: String,
        required: true,
      },

      user: {
        type: String,
        required: true
      },

      date: {
        type: String,
        required: true,
      },
    },
  ],

  likes: {
    type: Number,
    required: true
  },

  dislikes: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Post", PostSchema);
