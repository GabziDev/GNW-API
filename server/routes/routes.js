const express = require('express');
const { getBase, postBase } = require('../controllers/base.controller');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Ok !" });
});

router.get("/getbase", getBase)

router.post("/postbase", postBase);

module.exports = router;