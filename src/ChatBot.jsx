import React, { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const sendMessage = async () => {
  if (!input.trim()) return;

  // add user message
  setMessages((prev) => [...prev, { sender: "user", text: input }]);
  const userInput = input;
  setInput("");
  setLoading(true);

  try {
    const res = await fetch(`${process.env.APIS}/rag/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: userInput,
        k: 3
      }),
    });
    const data = await res.json();
    const answer = data.answer || "No reply received.";

    // add bot message
    setMessages((prev) => [...prev, { sender: "bot", text: answer }]);

  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "⚠️ Server error. Try again." },
    ]);
  }

  setLoading(false);
};


  // enter key to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{width:"100vw"}}>
    <div style={styles.container}>
      <h2 style={styles.title}>📘 Book Q&A Chatbot</h2>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              background: msg.sender === "user" ? "#DCF8C6" : "white",
              alignSelf:
              msg.sender === "user" ? "flex-end" : "flex-start",
              ...styles.message,
            }}
          >
            {msg.text}
          </div>
        ))}

        {loading && <p style={styles.loading}>Bot is typing...</p>}
        <div ref={bottomRef}></div>
      </div>

      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "30px auto",
    width: "50vw",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
    justifyContent:"center",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  chatBox: {
    height: "70vh",
    padding: "12px",
    width:"90%",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "#f5f5f5",
  },
  message: {
    padding: "10px",
    maxWidth: "75%",
    borderRadius: "8px",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.15)",
    fontSize: "14px",
    color:"#000000"
  },
  loading: {
    fontStyle: "italic",
    color: "#777",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    width: "50vw",
    maxWidth: "600px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 18px",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};
