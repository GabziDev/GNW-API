// Modeliser la base de données nosql
const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('base', postSchema);