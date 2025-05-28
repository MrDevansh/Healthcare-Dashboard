import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <span className={styles.title}>{title}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <p className={styles.time}>{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;
