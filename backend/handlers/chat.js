const Chat = require("../models/ChatSchema");
const History = require("../models/HistorySchema");
const connectDB = require("../db/db");

// Create Chat
async function handleCreateChat(req, res) {
  await connectDB();

  const { history_id, message, sender } = req.body;

  // If created_time not exist, use current Date
  const created_time = req.body.created_time || new Date();

  try {
    // Check if a history document with the given history_id exists
    const history = await History.findById(history_id);
    if (!history) {
      return res.status(400).send("Invalid history_id");
    }

    const chat = new Chat({ history_id, message, sender, created_time });
    await chat.save();
    res.send(chat);
  } catch (error) {
    res.status(500).send("An error occurred while saving the Chat document");
  }
}

// Get chats based on history_id
async function handleGetChats(req, res) {
  await connectDB();

  const { history_id } = req.query;
  const filter = history_id ? { history_id } : {};

  try {
    const chats = await Chat.find(filter).sort({ created_time: 1 });
    res.json(chats);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving Chat documents");
  }
}

// Delete chat by id
async function handleDeleteChats(req, res) {
  await connectDB();

  const { history_id } = req.query;

  try {
    const deletedChats = await Chat.deleteMany({ history_id });
    res.send(deletedChats);
  } catch (error) {
    res.status(500).send("An error occurred while deleting the Chat documents");
  }
}

module.exports = {
  handleCreateChat,
  handleGetChats,
  handleDeleteChats,
};
