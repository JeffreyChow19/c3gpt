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

export const postHistory = async () => {
  try {
    const response = await axios.post("/api/history");
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

export const deleteHistory = async (id) => {
  try {
    const response = await axios.delete("/api/history", {
      data: { id },
    });
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
