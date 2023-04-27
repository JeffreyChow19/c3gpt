const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QnASchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  deletable: {
    type: Boolean,
    default: false,
  },
});

let QnA;
try {
  QnA = mongoose.model("QnA");
} catch {
  // Connect to qnas collection on database
  QnA = mongoose.model("QnA", QnASchema, "qnas");
}

module.exports = QnA;
