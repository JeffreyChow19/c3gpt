const QnA = require("../models/QnASchema");
const connectDB = require("../db/db");

// Create QnA
async function handleCreateQnA(question, answer) {
  await connectDB();
  const qna = new QnA({ question, answer });

  try {
    await qna.save();
    return JSON.stringify(qna.toObject());
  } catch (error) {
    throw new Error("An error occurred while saving the QnA document");
  }
}

// Get QnAs
async function handleGetQnAs() {
  await connectDB();

  try {
    const qnas = await QnA.find();
    return JSON.stringify(qnas);
  } catch (error) {
    throw new Error("An error occurred while retrieving QnA documents");
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
    return JSON.stringify(qna);
  } catch (error) {
    throw new Error("An error occurred while updating the QnA document");
  }
}

// Delete QnA by Id
async function handleDeleteQnA(id) {
  await connectDB();

  try {
    const deletedQnA = await QnA.findByIdAndDelete(id);
    return JSON.stringify(deletedQnA);
  } catch (error) {
    throw new Error("An error occurred while deleting the QnA document");
  }
}

async function handleGetResponse(req, res) {
  const { question, algorithm } = req.query;
  const responseMessage = `You've asked ${question} using ${algorithm}`;
  res.status(200).send(responseMessage);

  // try {
  //   const qnasJSON = await handleGetQnAs();
  //   const qnas = JSON.parse(qnasJSON);
  //   console.log(qnas);
  //   res.json(qnas);
  // } catch (error) {
  //   res.status(500).send(error);
  // }

  // try {
  //   let result = await handleCreateQnA(
  //     "What is your name?",
  //     "My name is C3GPT2."
  //   );
  //   console.log(result);
  //   res.status(200).json(result);
  // } catch (error) {
  //   console.error(error);
  // }

  // try {
  //   let result = await handleUpdateQnA(
  //     "645205e1d94fc51a96ce6349",
  //     "Siapa namamu",
  //     "C3 bang"
  //   );
  //   console.log(result);
  //   res.status(200).json(JSON.stringify(result));
  // } catch (error) {
  //   res.status(500).send(error);
  // }

  // try {
  //   let result = await handleDeleteQnA("64520613d94fc51a96ce634b");
  //   console.log(result);
  //   res.status(200), json(result);
  // } catch (error) {
  //   res.status(500).send(error);
  // }

  // BRANCHING
}

module.exports = {
  handleGetResponse,
};
