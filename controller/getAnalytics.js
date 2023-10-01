const URL = require("../models/url");
const getAnalytics = async (req, res) => {
  const shortId = req.params.shortid;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
module.exports = getAnalytics;
