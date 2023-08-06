const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleGetUser,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortUrl);
router.route("/:shortId").get(handleGetUser);

module.exports = router;
