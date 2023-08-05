const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body) return res.status(400).json({ msg: "url is required" });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    vistedHistory: [],
  });
  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortUrl,
};
