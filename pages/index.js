import { useState } from "react";
import { Inter } from "next/font/google";
import {
  getHistories,
  postHistory,
  deleteHistory,
} from "@/services/history.js";
import { getChats, postChat, deleteChats } from "@/services/chat";
import ChatHistoryBar from "@/components/chat-history-bar";
import { Chats } from "@/components/chat";

export default function Home() {
  const handleGetHistories = async () => {
    try {
      const histories = await getHistories();
      console.log("Histories fetched successfully:", histories);
      setHistoryData(histories);
    } catch (error) {
      console.error("An error occurred while fetching the histories:", error);
    }
  };

  const [currentHistory, setCurrentHistory] = useState(null);
  const [historyData, setHistoryData] = useState(handleGetHistories);
  const [chatsData, setChatsData] = useState(null);
  const [algorithm, setAlgorithm] = useState("KMP");

  const handlePostHistory = async () => {
    try {
      const newHistory = await postHistory();
      setCurrentHistory(newHistory._id);
      console.log(currentHistory);
      console.log("History posted successfully:", newHistory);
      setHistoryData((prevData) => {
        const newData = [...prevData, newHistory];
        // Sort data based on created_time, descending
        newData.sort(
          (a, b) => new Date(b.created_time) - new Date(a.created_time)
        );
        return newData;
      });
      return newHistory._id;
    } catch (error) {
      console.error("An error occurred while posting the history:", error);
    }
  };

  const handleDeleteHistory = async (id) => {
    try {
      const deletedHistory = await deleteHistory(id);
      console.log("History deleted successfully:", deletedHistory);
      setHistoryData((prevData) =>
        prevData.filter((history) => history._id !== id)
      );
      console.log(historyData);
    } catch (error) {
      console.error("An error occurred while deleting the history:", error);
    }
  };

  const handleGetChats = async (history_id) => {
    try {
      const chats = await getChats(history_id);
      console.log("Chats fetched successfully:", chats);
      setChatsData(chats);
    } catch (error) {
      console.error("An error occurred while fetching the chats:", error);
    }
  };

  const handlePostChat = async (history_id, message, sender) => {
    try {
      // sender : is either "user" or "bot"
      console.log(history_id);
      const newChat = await postChat(history_id, message, sender);
      console.log("Chat posted successfully:", newChat);
      setChatsData((prevData) => [...prevData, newChat]);
    } catch (error) {
      console.error("An error occurred while posting the chat:", error);
    }
  };

  const handleDeleteChats = async (history_id) => {
    try {
      const deletedChats = await deleteChats(history_id);
      console.log("Chats deleted successfully:", deletedChats);
      setChatsData(
        (prevData) =>
          prevData && prevData.filter((chat) => chat.history_id !== history_id)
      );
    } catch (error) {
      console.error("An error occurred while deleting the chats:", error);
    }
  };

  // CHAT HISTORY BAR HANDLER
  const handleNewHistory = async () => {
    const newCurrentHistory = await handlePostHistory();
    await handleGetChats(newCurrentHistory);
  };

  const handleSwitchHistory = async (history_id) => {
    setCurrentHistory(history_id);
    await handleGetChats(history_id);
  };

  const handleRemoveHistory = async (history_id) => {
    setCurrentHistory(null);
    await handleDeleteHistory(history_id);
    await handleDeleteChats(history_id);
  };

  const handleAlgorithmChange = async (event) => {
    const selectedAlgorithm = event.target.value;
    setAlgorithm(selectedAlgorithm);
  };

  return (
    <div class="flex flex-no-wrap">
      <ChatHistoryBar
        currentHistory={currentHistory}
        historyData={historyData}
        handleNewHistory={handleNewHistory}
        handleSwitchHistory={handleSwitchHistory}
        handleRemoveHistory={handleRemoveHistory}
        handleAlgorithmChange={handleAlgorithmChange}
      />
      <Chats
        algorithm={algorithm}
        chatsData={chatsData}
        handlePostChat={handlePostChat}
        currentHistory={currentHistory}
      />
    </div>
  );
}
