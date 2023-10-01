const shortid = require("shortid");
const URL = require("../models/url");

const generateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(404).json({ message: "URL is not found" });
  }
  const shortID = shortid();
  const url = await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
};
module.exports = generateNewShortUrl;
