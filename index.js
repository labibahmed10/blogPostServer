const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/DBConnnect");
const blogRoutes = require("./routes/blogPost.routes");

// port
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());
require("dotenv").config();

// mongo server link
dbConnect();

// routes
app.use("/api", blogRoutes);

// open route
app.use("*", (req, res) => {
   res.send({
      status: 403,
      result: "A proper documentation will be updated according to routes",
   });
});

app.listen(port, () => {
   console.log("THe server is running at " + port);
});
