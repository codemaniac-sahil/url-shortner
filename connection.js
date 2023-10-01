const mongoose = require("mongoose");

const connection = async (url) => {
  return await mongoose.connect(url);
};
module.exports = connection;
