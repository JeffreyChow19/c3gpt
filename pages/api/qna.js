import {
  handleCreateQnA,
  handleGetQnAs,
  handleUpdateQnA,
  handleDeleteQnA,
} from "../../handlers/qna";

export default async function qnaHandler(req, res) {
  if (req.method === "POST") {
    await handleCreateQnA(req, res);
  } else if (req.method === "GET") {
    await handleGetQnAs(req, res);
  } else if (req.method === "PUT") {
    await handleUpdateQnA(req, res);
  } else if (req.method === "DELETE") {
    await handleDeleteQnA(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}
