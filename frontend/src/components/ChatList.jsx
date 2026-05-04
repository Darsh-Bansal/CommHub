import { useState } from "react";

function ChatList({ chats, setSelectedChat, selectedChat, loading }) {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="chat-list">Loading...</div>;

  return (
    <div className="chat-list">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredChats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setSelectedChat(chat)}
          className={`chat-item ${
            selectedChat?.id === chat.id ? "chat-active" : ""
          }`}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;