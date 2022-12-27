const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/DBConnnect");
require("dotenv").config();

// port
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

// mongo server link
dbConnect();

app.use("*", (req, res) => {
   res.send({
      status: 403,
      result: "A proper documentation will be updated according to routes",
   });
});

app.listen(port, () => {
   console.log("THe server is running at " + port);
});
