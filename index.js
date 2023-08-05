const express = require("express");
const { connectToMongoDb } = require("./connect.js");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/url-shortner")
  .then(() => console.log("connected to MongoDb"))
  .catch((err) => console.log(err));

// app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});
app.listen(PORT, () => console.log(`Server Running at port: ${PORT}`));
