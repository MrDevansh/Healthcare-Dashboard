import styles from "./ActivityFeed.module.css";
const ActivityFeed = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Activity</h3>
        <p>3 appointments this week</p>
      </div>

      <div className={styles.graph}>
        {data.map(({ day, values }, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.barGroup}>
              {values.map((value, i) => (
                <div
                  key={i}
                  className={`${styles.bar} ${styles[`bar${i + 1}`]}`}
                  style={{ height: `${value * 10}px` }}
                />
              ))}
            </div>
            <span className={styles.label}>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
