import React from "react";
import styles from "./CalendarSection.module.css";
import { Smile, ChevronLeft, ChevronRight, Dumbbell } from "lucide-react";

const weekDays = [
  { day: "Sun", date: "25" },
  { day: "Mon", date: "26" },
  { day: "Tue", date: "27" },
  { day: "Wed", date: "28" },
  { day: "Thu", date: "29" },
  { day: "Fri", date: "30" },
  { day: "Sat", date: "31" },
];

const iconMap = {
  Dentist: <Smile color="#6D28D9" size={16} />,
  "Physiotherapy Appointment": <Dumbbell color="#F97316" size={16} />,
};
const CalendarSection = ({ appointments }) => {
  const timeOnlyAppointments = appointments.filter((appt) => !appt.title);
  const detailedAppointments = appointments.filter((appt) => appt.title);

  return (
    <div className={styles.container}>
      <div className={styles.calendarHeader}>
        <h3>May 2025</h3>
        <div>
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {weekDays.map(({ day, date }) => (
          <div key={day} className={styles.dayColumn}>
            <div className={styles.dayHeader}>
              <p className={styles.dateText}>{date}</p>
              <p className={styles.dayLabel}>{day}</p>
            </div>

            <div className={styles.timeSlots}>
              {timeOnlyAppointments
                .filter((appt) => appt.day === day)
                .map((appt, index) => (
                  <span key={index} className={styles.timeTag}>
                    {appt.time}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cardRow}>
        {detailedAppointments.map((appt, index) => (
          <div
            key={index}
            className={`${styles.simpleCard} ${
              appt.title.length > 20 ? styles.wideCard : ""
            }`}
          >
            <p className={styles.cardText}>
              {appt.title}{" "}
              <span className={styles.cardIcon}>{iconMap[appt.title]}</span>
            </p>
            <div className={styles.cardBottomRow}>
              <span className={styles.cardTime}>{appt.time}</span>
              <span className={styles.cardDoctor}>{appt.doctor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;
