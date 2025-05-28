import styles from "./HealthStatusCards.module.css";
import { HeartPulse, Smile, Bone } from "lucide-react";

const statusData = [
  {
    id: 1,
    title: "Lungs",
    status: "Critical",
    date: "22 May",
    icon: <HeartPulse color="red" />,
    color: "#dce3fc",
    barColor: "#f44336",
  },
  {
    id: 2,
    title: "Teeth",
    status: "Good",
    date: "20 May",
    icon: <Smile color="#4caf50" />,
    color: "#dce3fc",
    barColor: "#4caf50",
  },
  {
    id: 3,
    title: "Bone",
    status: "Weak",
    date: "18 May",
    icon: <Bone color="orange" />,
    color: "#dce3fc",
    barColor: "#ff9800",
  },
];

function HealthStatusCards() {
  return (
    <div className={styles.cardsContainer}>
      {statusData.map(({ id, title, status, date, icon, color, barColor }) => (
        <div
          className={styles.card}
          key={id}
          style={{ backgroundColor: color }}
        >
          <div className={styles.icon}>{icon}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.statusBar}>
            <div
              className={styles.status}
              style={{ backgroundColor: barColor }}
            ></div>
          </div>
          <div className={styles.date}>Date: {date}</div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
