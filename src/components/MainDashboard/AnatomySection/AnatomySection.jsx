import styles from "./AnatomySection.module.css";
import anatomyImage from "../../../assets/anatomy.png";
import { HeartPulse, Footprints, ZoomIn } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.zoomIcon}>
        <ZoomIn size={18} strokeWidth={2} />
      </div>

      <img src={anatomyImage} alt="Anatomy" className={styles.anatomyImage} />

      <div className={`${styles.tag} ${styles.heart}`}>
        <HeartPulse size={14} style={{ marginRight: "6px" }} />
        <span>Healthy Heart</span>
      </div>
      <div className={`${styles.tag} ${styles.leg}`}>
        <Footprints size={14} style={{ marginRight: "6px" }} />
        <span>Healthy Leg</span>
      </div>
    </div>
  );
};

export default AnatomySection;
