const mongoose = require('mongoose');

const connectionMongo = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect('mongodb://admin:ybv76GQg53Xi2C@163.5.143.222:30001/gnw-api?authSource=admin&readPreference=primary&ssl=false');
    } catch {

    }
}