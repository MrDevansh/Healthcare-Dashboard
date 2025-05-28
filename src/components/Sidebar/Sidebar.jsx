import React from "react";
import styles from "./Sidebar.module.css";
import navigationLinks from "@/data/navigationLinks";
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings,
} from "lucide-react";

const icons = {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings,
};

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.health}>Health</span>
          <span className={styles.care}>care.</span>
        </div>

        <div className={styles.topSection}>
          <h3 className={styles.sectionTitle}>General</h3>
          <ul className={styles.navList}>
            {navigationLinks.general.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>

          <h3 className={styles.sectionTitle} style={{ marginTop: "2rem" }}>
            Tools
          </h3>
          <ul className={styles.navList}>
            {navigationLinks.tools.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.bottomSection}>
          <ul className={styles.navList}>
            {navigationLinks.settings.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
