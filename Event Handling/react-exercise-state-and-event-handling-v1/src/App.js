import moment from "moment-timezone";
import { useState } from "react";

const App = () => {
  const currentTime = "01:00:00";
  // Buatlah state dengan nama "timezone" disini

  const [timezone, setTimeZone] = useState("");

  const formatedTime = moment(currentTime, "HH:mm:ss");
  const time = timezone
    ? moment.tz(formatedTime, timezone).format("HH:mm:ss")
    : "00:00:00";

  const handleTimezoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      <h2>Converted time: {time}</h2>
      <form>
        <label>convert to:</label>
        <select value={timezone} onChange={handleTimezoneChange}>
          <option value="">Select timezone</option>
          <option value="Asia/Tokyo">Tokyo</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/Madrid">Madrid</option>
          <option value="Africa/Cairo">Cairo</option>
          <option value="Australia/Sydney">Sydney</option>
        </select>
      </form>
    </div>
  );
};

export default App;
