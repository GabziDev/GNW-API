const express = require('express');
const { postBase } = require('../controllers/base.controller');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Ok !" });
});

router.post("/", postBase);

module.exports = router;