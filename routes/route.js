const express = require("express");
const generateNewShortUrl = require("../controller/url");
const getUrl = require("../controller/geturl");
const getAnalytics = require("../controller/getAnalytics");
const router = express.Router();
router.post("/", generateNewShortUrl);

router.get("/:shortid", getUrl);

router.get("/analytics/:shortid", getAnalytics);

module.exports = router;
