const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Connect to MongoDB c3gpt database
    await mongoose.connect(
      YOUR_MONGODB_API_KEY,
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
