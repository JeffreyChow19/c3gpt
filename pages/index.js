import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { getQnAs, postQnA, deleteQnA } from "@/services/qna.js";
import { getHistories, postHistory } from "@/services/history.js";
import { getChats, postChat } from "@/services/chat";
import ChatHistoryBar from "@/components/chat-history-bar";
import { Chat } from "@/components/chat/chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [qnaData, setQnaData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [chatsData, setChatsData] = useState(null);

  const handleGetQnAs = async () => {
    try {
      const result = await getQnAs();
      console.log("QnAs fetched successfully:", result);
      setQnaData(result);
    } catch (error) {
      console.error("An error occurred while fetching the QnAs:", error);
    }
  };

  const handlePostQnA = async (question, answer) => {
    try {
      const newQnA = await postQnA(question, answer);
      console.log("QnA posted successfully:", newQnA);
      setQnaData((prevData) => [...prevData, newQnA]);
    } catch (error) {
      console.error("An error occurred while posting the QnA:", error);
    }
  };

  const handleDeleteQnA = async (id) => {
    try {
      const deletedQnA = await deleteQnA(id);
      console.log("QnA deleted successfully:", deletedQnA);
      setQnaData((prevData) => prevData.filter((qnA) => qnA._id !== id));
    } catch (error) {
      console.error("An error occurred while deleting the QnA:", error);
    }
  };

  const handleGetHistories = async () => {
    try {
      const histories = await getHistories();
      console.log("Histories fetched successfully:", histories);
      setHistoryData(histories);
    } catch (error) {
      console.error("An error occurred while fetching the histories:", error);
    }
  };

  const handlePostHistory = async (historyData) => {
    try {
      const newHistory = await postHistory(historyData);
      console.log("History posted successfully:", newHistory);
      setHistoryData((prevData) => [...prevData, newHistory]);
    } catch (error) {
      console.error("An error occurred while posting the history:", error);
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
    // sender : is either "user" or "bot"
    try {
      const newChat = await postChat(history_id, message, sender);
      console.log("Chat posted successfully:", newChat);
      setChatsData((prevData) => [...prevData, newChat]);
    } catch (error) {
      console.error("An error occurred while posting the chat:", error);
    }
  };

  return (
    <>
      {/* <ChatHistoryBar histories = {historyData}/> */}
      <h1 className="text-3xl font-bold">Hello world</h1>

      <button onClick={() => handleGetChats("644a953d1a44a215224e7ca3")}>
        Get Chats
      </button>
      <Chat chatsData={chatsData} handlePostChat={handlePostChat} history_id={"644a953d1a44a215224e7ca3"}/>
      {chatsData &&
        chatsData.map((chat, i) => {
          return (
            <h4 key={i}>
              {chat.sender}: {chat.message}
            </h4>
          );
        })}

      <button onClick={handleGetHistories}>Get Histories</button>
      {historyData &&
        historyData.map((item, i) => {
          return <h4 key={i}>{item.created_time}</h4>;
        })}
    </>
  );
}
