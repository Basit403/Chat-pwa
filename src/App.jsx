import './App.css'
import { useState } from "react";
import Header from './component/Header';
import ChatBody from './component/ChatBody';
import InputBar from './component/InputBar';
import BottomNav from './component/BottomNav';
import Auth from './component/Auth';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // If not logged in → show Auth page
  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  // If logged in → show Chat
  return (
    <div className="phone">
      <Header />
      <ChatBody messages={messages} />
      <InputBar onSend={sendMessage} />
      <BottomNav />
    </div>
  );
}
