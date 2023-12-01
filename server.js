require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);


app.use(express.static(path.join(__dirname, './build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build'))
})

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("mongoDB database connection established successfully");
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
