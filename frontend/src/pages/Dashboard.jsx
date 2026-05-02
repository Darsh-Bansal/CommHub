import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import { getChats } from "../services/api";

function Dashboard() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getChats();
      setChats(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <ChatList chats={chats} setSelectedChat={setSelectedChat} />
      <ChatWindow chat={selectedChat} />
    </div>
  );
}

export default Dashboard;