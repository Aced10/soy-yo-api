const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is ready on port ${process.env.PORT ?? 3000}`);
});


app.use(bodyParser.json({ limit: "50mb", extended: true }));

//Routes
app.use("/test-soyyo", require("./routes/entitiesRoutes"));
module.exports = app