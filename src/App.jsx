import Sidebar from "./components/Sidebar/Sidebar";
import DashboardOverview from "../src/components/DashboardOverview/DashboardOverview";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.dashboardArea}>
          <DashboardOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
