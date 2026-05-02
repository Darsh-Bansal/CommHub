function ChatWindow({ chat }) {
  if (!chat) {
    return <div className="chat-window">Select a chat</div>;
  }

  return (
    <div className="chat-window">
      <h3>{chat.name}</h3>

      {chat.messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}

export default ChatWindow;