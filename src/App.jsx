import { useState } from 'react';
import useCurrentForecast from './lib/hooks/useCurrentForecast.js';
import TodayStats from './components/TodayStats.jsx';
import ForecastDetails from './components/ForecastDetails.jsx';
import styles from './App.module.css';

const App = () => {
    const [currentLocation, setCurrentLocation] = useState({
        latitude: 10.48801,
        longitude: -66.87919,
    });

    const { todayStats, loading, error } = useCurrentForecast(currentLocation);

    return (
        <div className={styles.wrapper}>
            <TodayStats
                todayStats={todayStats}
                loading={loading}
                error={error}
            />
            <ForecastDetails
                statsDetails={todayStats.details}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default App;
