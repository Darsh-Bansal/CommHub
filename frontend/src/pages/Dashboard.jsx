import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import { getChats } from "../services/api";

function Dashboard() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getChannels();
      const formatted = data.map(c => ({
        id: c.id,
        name: c.name,
        platform: "Slack"
      }));
      setChats(formatted);
    }
    fetchData();
  }, []);



  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
    const data = await getMessages(selectedChat.id);
      setMessages(data);
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

  return (
    <div className="container">
      <Sidebar />
      <ChatList chats={chats} setSelectedChat={setSelectedChat} />
      <ChatWindow chat={selectedChat} messages={messages} />
    </div>
  );
}

export default Dashboard;