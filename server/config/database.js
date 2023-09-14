const mongoose = require('mongoose');

const connectionMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de données connecter !");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = connectionMongo;