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
        {loading ? <p>Loading...</p> : ([...messages].reverse().map((msg, i) => (
            <div key={i}>
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
