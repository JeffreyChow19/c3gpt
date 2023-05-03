// Import the request handlers for the History model
const {
  handleCreateHistory,
  handleGetHistories,
  handleDeleteHistory,
} = require("../../backend/handlers/history");

export default async function historyHandler(req, res) {
  if (req.method === "POST") {
    await handleCreateHistory(req, res);
  } else if (req.method === "GET") {
    await handleGetHistories(req, res);
  } else if (req.method === "DELETE") {
    await handleDeleteHistory(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}
