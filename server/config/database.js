const mongoose = require('mongoose');

const connectionMongo = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect('mongodb://');
    } catch {

    }
}