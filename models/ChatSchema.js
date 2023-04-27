const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  history_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  created_time: {
    type: Date,
    required: true,
  },
});

let Chat;
try {
  Chat = mongoose.model("Chat");
} catch {
  // Connect to chats collection on database
  Chat = mongoose.model("Chat", ChatSchema, "chats");
}

module.exports = Chat;
