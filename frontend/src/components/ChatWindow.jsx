import { useEffect, useRef } from "react";

function ChatWindow({ chat, messages, loading }) {
  const bottomRef = useRef();

  // auto scroll when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);

  if (!chat) return <div className="chat-window">Select a chat</div>;

  return (
    <div className="chat-window">

      {/* HEADER */}
      <div className="chat-header">{chat.name}</div>

      {/* MESSAGES */}
      <div className="messages">
        {loading ? <p>Loading...</p> : (messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${
                msg.user === "You" ? "message-right" : "message-left"}`}
            >
              <b>{msg.user}</b>: {msg.content}
            </div>
          ))
        )}
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default ChatWindow;