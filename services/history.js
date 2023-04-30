import axios from "axios";

export const getHistories = async () => {
  try {
    const response = await axios.get("/api/history");
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Not Found: No history data found");
    } else {
      throw error;
    }
  }
};

export const postHistory = async (historyData) => {
  try {
    const response = await axios.post("/api/history", historyData);
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Bad Request: Invalid history data");
    } else {
      throw error;
    }
  }
};
