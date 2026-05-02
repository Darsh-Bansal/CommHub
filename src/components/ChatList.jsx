function ChatList({ chats, setSelectedChat }) {
  return (
    <div className="chat-list">
      <h3>Chats</h3>

      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => setSelectedChat(chat)}
        >
          <h4>{chat.name}</h4>
          <p>{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatList;