// Initialize Express Server
const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const logger = require('morgan');
const app = express();

// -------------------------------------------------
//App Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodmyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// -------------------------------------------------
// Server Setup
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
