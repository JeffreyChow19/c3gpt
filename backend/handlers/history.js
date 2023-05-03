const History = require("../models/HistorySchema");
const connectDB = require("../db/db");

// Create History
async function handleCreateHistory(req, res) {
  await connectDB();

  // Use current date as created time
  const created_time = new Date();

  try {
    const history = new History({ created_time });
    await history.save();
    res.send(history);
  } catch (error) {
    res.status(500).send("An error occurred while saving the History document");
  }
}

// Get Histories
async function handleGetHistories(req, res) {
  await connectDB();

  try {
    // Sort histories descending based on created_time
    const histories = await History.find().sort({ created_time: -1 });
    res.json(histories);
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while retrieving History documents");
  }
}

// Delete History
async function handleDeleteHistory(req, res) {
  await connectDB();

  const { id } = req.query;

  try {
    await History.findByIdAndDelete(id);
    res.send("History document deleted successfully");
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while deleting the History document");
  }
}

module.exports = {
  handleCreateHistory,
  handleGetHistories,
  handleDeleteHistory,
};
