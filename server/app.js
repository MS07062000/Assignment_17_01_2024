const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const { fetchImagesFromPixabay } = require("./getImages.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = [
  "https://assignment-17-01-2024.vercel.app",
  "https://b21c23f4-708a-4d40-b7c1-d794604efbcc-00-25upzyrl3xtnj.picard.replit.dev",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/getImages", async (req, res) => {
  try {
    const { query, category = null } = req.query;
    const images = await fetchImagesFromPixabay(query, category);
    res.status(200).send(images);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
