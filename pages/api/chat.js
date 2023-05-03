const {
  handleCreateChat,
  handleGetChats,
  handleDeleteChats,
} = require("../../handlers/chat");

export default async function chatHandler(req, res) {
  if (req.method === "POST") {
    await handleCreateChat(req, res);
  } else if (req.method === "GET") {
    await handleGetChats(req, res);
  } else if (req.method === "DELETE") {
    await handleDeleteChats(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}
