const QnA = require("../models/QnASchema");
const connectDB = require("../db/db");

// Create QnA
async function handleCreateQnA(req, res) {
  await connectDB();

  const { question, answer } = req.body;
  const qna = new QnA({ question, answer });
  await qna.save();

  try {
    await qna.save();
    res.send(qna);
  } catch (error) {
    res.status(500).send("An error occurred while saving the QnA document");
  }
}

// Get QnAs
async function handleGetQnAs(req, res) {
  await connectDB();

  try {
    const qnas = await QnA.find();
    res.json(qnas);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving QnA documents");
  }
}

// Update QnA
async function handleUpdateQnA(req, res) {
  await connectDB();

  const { id, question, answer } = req.body;

  try {
    const updatedQnA = await QnA.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );
    res.send(updatedQnA);
  } catch (error) {
    res.status(500).send("An error occurred while updating the QnA document");
  }
}

// Delete QnA by Id
async function handleDeleteQnA(req, res) {
  await connectDB();

  const { id } = req.body;

  try {
    const deletedQnA = await QnA.findByIdAndDelete(id);
    res.send(deletedQnA);
  } catch (error) {
    res.status(500).send("An error occurred while deleting the QnA document");
  }
}

module.exports = {
  handleCreateQnA,
  handleGetQnAs,
  handleUpdateQnA,
  handleDeleteQnA,
};
