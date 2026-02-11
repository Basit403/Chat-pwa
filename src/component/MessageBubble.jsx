export default function MessageBubble({ text, side }) {
  return <div className={`bubble ${side}`}>{text}</div>;
}
