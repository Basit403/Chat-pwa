import MessageBubble from "./MessageBubble";

export default function ChatBody({ messages }) {
  return (
    <div className="chat-body">
      {messages.map((msg, i) => (
        <MessageBubble
          key={i}
          text={msg.text}
          side={msg.side}
        />
      ))}
    </div>
  );
}
