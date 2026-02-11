import './App.css'
import { useState } from "react";
import Header from './component/Header';
import ChatBody from './component/ChatBody';
import InputBar from './component/InputBar';
import BottomNav from './component/BottomNav';

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello", side: "left" },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text, side: "right" },
    ]);
  };

  return (
    <div className="phone">
      <Header />
      <ChatBody messages={messages} />
      <InputBar onSend={sendMessage} />
      <BottomNav />
    </div>
  );
}
