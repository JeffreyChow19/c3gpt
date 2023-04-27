const History = require("../models/HistorySchema");
const connectDB = require("../db/db");

// Create History
async function handleCreateHistory(req, res) {
  await connectDB();

  // If created_time is not passed, use current Date
  const created_time = req.body.created_time || new Date();

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

// Handle updating a History document by id
async function handleUpdateHistory(req, res) {
  await connectDB();
  const { id, created_time } = req.body;

  try {
    const updatedHistory = await History.findByIdAndUpdate(
      id,
      { created_time },
      { new: true }
    );
    res.send(updatedHistory);
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while updating the History document");
  }
}

// Handle deleting a History document by id
async function handleDeleteHistory(req, res) {
  await connectDB();
  const { id } = req.body;

  try {
    const deletedHistory = await History.findByIdAndDelete(id);
    res.send(deletedHistory);
  } catch (error) {
    res
      .status(500)
      .send("An error occurred while deleting the History document");
  }
}

module.exports = {
  handleCreateHistory,
  handleGetHistories,
  handleUpdateHistory,
  handleDeleteHistory,
};
