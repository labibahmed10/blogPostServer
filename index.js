const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
   res.send({
      status: 403,
      result: "A proper documentation will be updated according to routes",
   });
});

app.listen(port, "localhost", 8000, () => {
   console.log("THe server is running at " + port);
});
