import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
export const DashboardComponentBigCalendar = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar localizer={localizer} startAccessor="start" endAccessor="end" style={{height: 600}} />
    </div>
  );
};
