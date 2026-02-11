import calendar from "../assets/calendar.png";
import notification from "../assets/notification.png";
import settings from "../assets/settings.png";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      
      <button>
        <img src={notification} alt="Notifications" />
      </button>

      <button>
        <img src={calendar} alt="Calendar" />
      </button>

      <button>
        <img src={settings} alt="Settings" />
      </button>
    </div>
  );
}
