const BaseModel = require('../models/base.model');

module.exports.postBase = async (req, res) => {
    if (!req.body.message) {
        res.status(400).json({message: "Erreur: ajouter message !"});
    } else if (!req.body.author) {
        res.status(400).json({message: "Erreur: ajouter auteur !"});
    }

    const base = await BaseModel.create({
        message: req.body.message,
        author: req.body.author,
    });

    res.status(200).json(base);
};
