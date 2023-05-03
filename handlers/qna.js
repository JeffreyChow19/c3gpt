const QnA = require("../models/QnASchema");
const connectDB = require("../db/db");

// Create QnA
async function handleCreateQnA(question, answer) {
  await connectDB();
  const qna = new QnA({ question, answer });

  try {
    await qna.save();
    return qna;
  } catch (error) {
    throw new Error("An error occurred while saving the QnA document");
  }
}

// Get QnAs
async function handleGetQnAs() {
  await connectDB();

  try {
    const qnas = await QnA.find();
    res.json(qnas);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving QnA documents");
  }
}

// Update QnA
async function handleUpdateQnA(_id, question, answer) {
  await connectDB();

  try {
    const qna = await QnA.findByIdAndUpdate(
      _id,
      { question, answer },
      { new: true }
    );
    res.json(qna);
  } catch (error) {
    res.status(500).send("An error occurred while updating the QnA document");
  }
}

// Delete QnA by Id
async function handleDeleteQnA(id) {
  await connectDB();

  try {
    const deletedQnA = await QnA.findByIdAndDelete(id);
    res.send(deletedQnA);
  } catch (error) {
    res.status(500).send("An error occurred while deleting the QnA document");
  }
}

async function handleGetResponse(req, res) {
  const { question, method } = req.query;

  // BRANCHING
}

module.exports = {
  handleGetResponse,
};
