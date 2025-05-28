import React from "react";
import styles from "./LeftOverview.module.css";
import AnatomySection from "../MainDashboard/AnatomySection/AnatomySection";
import HealthStatusCards from "../MainDashboard/HealthStatusCards/HealthStatusCards";
import ActivityFeed from "../MainDashboard/ActivityFeed/ActivityFeed";
import activityData from "@/data/activityData";
import { Bell } from "lucide-react";

const LeftOverview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchRow}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search..."
        />
        <div className={styles.bellIcon}>
          <Bell size={18} color="darkblue" />
        </div>
      </div>

      <h2 className={styles.heading}>Dashboard</h2>

      <div className={styles.topContent}>
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className={styles.activityFeedWrapper}>
        <ActivityFeed data={activityData} />
      </div>
    </div>
  );
};

export default LeftOverview;
