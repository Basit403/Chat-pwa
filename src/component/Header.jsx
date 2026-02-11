import user from "../assets/user.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">Chat App</div>

      <div className="header-avatar">
        <img src={user} alt="User Avatar" />
      </div>
    </div>
  );
}
