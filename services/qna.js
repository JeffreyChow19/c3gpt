import axios from "axios";

export const getResponse = async (question, algorithm) => {
  try {
    const response = await axios.get("/api/qna", {
      params: { question, algorithm },
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
