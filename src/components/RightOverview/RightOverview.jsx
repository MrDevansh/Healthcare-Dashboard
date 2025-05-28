import React from "react";
import styles from "./RightOverview.module.css";
import CalendarView from "../MainDashboard/CalendarSection/CalendarSection";
import UpcomingSchedule from "../MainDashboard/UpcomingSchedule/UpcomingSchedule";
import { upcomingAppointments } from "@/data/appointments";
import { calendarAppointments } from "@/data/appointments";
import doctorIcon from "../../assets/Doctor.svg";
import { Plus } from "lucide-react";

const RightOverview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.unifiedBlock}>
        <div className={styles.blockTopRow}>
          <img src={doctorIcon} alt="Doctor" className={styles.avatar} />
          <button className={styles.addButton}>
            <Plus size={18} />
          </button>
        </div>

        <CalendarView appointments={calendarAppointments} />
        <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </div>
    </div>
  );
};

export default RightOverview;
