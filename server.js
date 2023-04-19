const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 300;
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")


require('dotenv').config();
// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes here
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("mongoDB database connection established successfully");
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
