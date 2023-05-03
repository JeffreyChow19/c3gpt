import { handleGetResponse } from "../../backend/handlers/qna";

export default async function qnaHandler(req, res) {
  if (req.method === "GET") {
    await handleGetResponse(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}
