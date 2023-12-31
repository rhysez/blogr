const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        },

        date: {
            type: String,
        },

        user: {
            type: Schema.Types.ObjectId,
            required: true
        },

        comments: [
            {
                text: {
                    type: String,
                    required: true
                },

                date: {
                    type: String,
                    required: true
                }
            }
        ],
    }
);

module.exports = mongoose.model('Post', PostSchema)