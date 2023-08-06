const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleGetRedirectUrl,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortUrl);
router.route("/:shortId").get(handleGetRedirectUrl);

module.exports = router;
