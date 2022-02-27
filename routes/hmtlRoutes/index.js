const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (res, req) => {
    res.sendFile(path.join(__dirname, "../../Develop/assets/public/index.html"));
});

router.get("*", (res, req) => {
    res.sendFile(path.join(__dirname, "../../Develop/assets/public/index.html"));
});



module.exports = router;