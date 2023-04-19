const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose")

require('dotenv').config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/apiRoutes")(app)
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("mongoDB database connection established successfully");
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
