const URL = require("../models/url");
const getUrl = async (req, res) => {
  const shortId = req.params.shortid;
  console.log(shortId);
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
};
module.exports = getUrl;
