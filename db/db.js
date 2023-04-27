const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Connect to MongoDB c3gpt database
    await mongoose.connect(
      "mongodb+srv://root:root@clustergpt.kg9chjf.mongodb.net/c3gpt?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    throw err;
  }
}

module.exports = connectDB;
