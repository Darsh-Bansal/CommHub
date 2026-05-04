import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import { getChannels, getMessages } from "../services/api";

function Dashboard() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingChats, setLoadingChats] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const data = await getChannels();
      const formatted = data.map((c) => ({
        id: c.id,
        name: c.name,
        platform: "Slack",
      }));
      setChats(formatted);
      setLoadingChats(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
      setLoadingMessages(true);
      const data = await getMessages(selectedChat.id);
      setMessages(data);
      setLoadingMessages(false);
    }

    loadMessages();
  }, [selectedChat]);

  useEffect(() => {
    if (!selectedChat) return;

    const interval = setInterval(async () => {
      const data = await getMessages(selectedChat.id);
      setMessages(data);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedChat]);

  useEffect(() => {
    setSelectedChat(null);
  }, [filter]);

  const filteredChats = filter === "All" ? chats : chats.filter((chat) => chat.platform === filter);

  return (
    <div className="container">
      <Sidebar filter={filter} setFilter={setFilter} />

      <ChatList
        chats={filteredChats}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        loading={loadingChats}
      />

      <ChatWindow
        chat={selectedChat}
        messages={messages}
        loading={loadingMessages}
      />
    </div>
  );
}

export default Dashboard;