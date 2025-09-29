import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Calendario"
};

const Calendar = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="h-full">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2cOlXO_el98i9F3p7EUbL13nv9af5w6_sl-vFBGfjJKFNqnigST1BFfzXk7kJ8c4HcNr7GkC2m?gv=true"
          style={{border: 0}}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
