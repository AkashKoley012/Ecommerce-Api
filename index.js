const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const db = require("./config/mongoose");
const port = process.env.PORT || 8000;
const app = express();

// set up for json request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up for routes and methods
app.use(morgan("dev"));

app.use("/", require("./routes"));

app.listen(port, (err) => {
    if (err) console.log(`Error in running the server: ${err}`);
    else console.log(`Server is running on port: ${port}`);
});
