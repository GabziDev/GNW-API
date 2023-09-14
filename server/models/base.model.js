// Modeliser la base de données nosql.
const mongoose = require('mongoose');

const baseSchema = mongoose.Schema(
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

module.exports = mongoose.model('base', baseSchema);