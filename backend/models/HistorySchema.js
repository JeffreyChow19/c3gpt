const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  created_time: {
    type: Date,
    required: true,
  },
});

let History;
try {
  History = mongoose.model("History");
} catch {
  // Connect to histories collection on database
  History = mongoose.model("History", HistorySchema, "histories");
}

module.exports = History;
