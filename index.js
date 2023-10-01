const express = require("express");
const urlRoute = require("./routes/route");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");
const path = require("path");
const connection = require("./connection");
const app = express();
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
connection("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Database connected")
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

const PORT = 8001;
app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
