const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.zqp7w.mongodb.net/?retryWrites=true&w=majority`;

const dbConnect = async () => {
   try {
      await mongoose.connect(url).then(mongoose.connection);
      console.log("Mongo server is connected");
   } catch (error) {
      console.log(error);
   }
};

module.exports = dbConnect;
