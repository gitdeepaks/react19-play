import { useState } from "react";

const fetchMessages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, message: "Hello" },
        { id: 2, message: "World 🚀" },
      ]);
    }, 2000);
  });
};

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const download = () => {
    setMessages(fetchMessages());
    setLoading(true);
  };

  if (loading) {
    return (
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <button
        onClick={download}
        className="bg-blue-500 hover:bg-blue-500 text-white font-extrabold py-2 rounded"
      >
        Get Messages
      </button>
    );
  }
};

export default Messages;
