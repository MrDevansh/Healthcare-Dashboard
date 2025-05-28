import styles from "./DashboardOverview.module.css";
import LeftOverview from "../LeftOverview/LeftOverview";
import RightOverview from "../RightOverview/RightOverview";

function DashboardOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <LeftOverview />
      </div>
      <div className={styles.rightColumn}>
        <RightOverview />
      </div>
    </div>
  );
}

export default DashboardOverview;
