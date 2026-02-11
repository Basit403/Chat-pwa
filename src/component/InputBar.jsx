import { useState } from "react";

export default function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="input-bar">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>▶</button>
    </div>
  );
}
