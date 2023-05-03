import axios from "axios";

export const getResponse = async (question, method) => {
  try {
    const response = await axios.get("/api/qna", {
      params: { question, method },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Error: Unable to get Response");
    } else {
      throw error;
    }
  }
};
