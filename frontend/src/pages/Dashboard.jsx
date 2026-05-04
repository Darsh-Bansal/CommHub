import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import { getChannels, getMessages } from "../services/api";

function Dashboard() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch channels
  useEffect(() => {
    async function fetchData() {
      const data = await getChannels();

      const formatted = data.map((c) => ({
        id: c.id,
        name: c.name,
        platform: "Slack",
        lastMessage: "Click to view messages"
      }));

      setChats(formatted);
    }
    fetchData();
  }, []);

  // Fetch messages when chat selected
  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
      const data = await getMessages(selectedChat.id);
      setMessages(data);
    }

    loadMessages();
  }, [selectedChat]);

  // Auto refresh messages
  useEffect(() => {
    if (!selectedChat) return;

    const interval = setInterval(async () => {
      const data = await getMessages(selectedChat.id);
      setMessages(data);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedChat]);

  // Filter chats
  const filteredChats =
    filter === "All"
      ? chats
      : chats.filter((chat) => chat.platform === filter);

  return (
    <div className="container">
      <Sidebar setFilter={setFilter} />
      <ChatList chats={filteredChats} setSelectedChat={setSelectedChat} />
      <ChatWindow chat={selectedChat} messages={messages} />
    </div>
  );
}

export default Dashboard;