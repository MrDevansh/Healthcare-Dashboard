import styles from "./UpcomingSchedule.module.css";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import { Syringe, Eye, HeartPulse, Brain } from "lucide-react";

const iconMap = {
  "Health checkup Complete": <Syringe size={16} color="#EF4444" />,
  Ophthalmologist: <Eye size={16} color="#60A5FA" />,
  Cardiologist: <HeartPulse size={16} color="#EF4444" />,
  Neurologist: <Brain size={16} color="#6366f1" />,
};

function UpcomingSchedule({ upcomingAppointments }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group) => (
        <div key={group.id} className={styles.dayGroup}>
          <p className={styles.dayLabel}>On {group.day}</p>
          <div className={styles.cardRow}>
            {group.appointments.map((appt, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appt.title}
                time={appt.time}
                icon={iconMap[appt.title]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
