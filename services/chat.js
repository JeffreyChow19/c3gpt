import axios from "axios";

export const getChats = async (history_id) => {
  try {
    const response = await axios.get("/api/chat", {
      params: { history_id },
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Not Found: No chat data found");
    } else {
      throw error;
    }
  }
};

export const postChat = async (history_id, message, sender) => {
  try {
    const response = await axios.post("/api/chat", {
      history_id,
      message,
      sender,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Bad Request: Invalid history_id");
    } else {
      throw error;
    }
  }
};

export const deleteChat = async (id) => {
  try {
    const response = await axios.delete("/api/chat", {
      data: { id },
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Bad Request: Invalid chat data");
    } else {
      throw error;
    }
  }
};
