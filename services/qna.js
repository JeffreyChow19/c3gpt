import axios from "axios";

export const getQnAs = async () => {
  try {
    const response = await axios.get("/api/qna");
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Not Found: No QnA documents found");
    } else {
      throw error;
    }
  }
};

export const postQnA = async (question, answer) => {
  try {
    const response = await axios.post("/api/qna", { question, answer });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Bad Request: Invalid question or answer");
    } else {
      throw error;
    }
  }
};

export const deleteQnA = async (id) => {
  try {
    const response = await axios.delete("/api/qna", { data: { id } });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Not Found: QnA document not found");
    } else {
      throw error;
    }
  }
};
