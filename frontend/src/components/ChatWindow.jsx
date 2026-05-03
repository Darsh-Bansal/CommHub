function ChatWindow({ chat, messages }) {
  if (!chat) {
    return <div className="chat-window">Select a chat</div>;
  }

  return (
    <div className="chat-window">
      <h3>{chat.name}</h3>

      {messages.map((msg, i) => (
        <p key={i}>{msg.user} :{msg.content}</p>
      ))}
    </div>
  );
}

export default ChatWindow;