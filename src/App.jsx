import { useState, useEffect } from 'react';
import { DEFAULT_LOCATION } from './constants/location.js';
import useCurrentForecast from './lib/hooks/useCurrentForecast.js';
import TodayStats from './components/TodayStats.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';
import styles from './App.module.css';

const App = () => {
    const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION);

    useEffect(() => {
        getLocation(setCurrentLocation);
    }, []);

    const { todayStats, loading, error } = useCurrentForecast(currentLocation);

    return (
        <div className={styles.wrapper}>
            <TodayStats
                todayStats={todayStats}
                loading={loading}
                error={error}
            />
            <WeatherDetails
                statsDetails={todayStats.details}
                loading={loading}
                error={error}
            />
        </div>
    );
};

const getLocation = async (setCurrentLocation) => {
    try {
        const location = await getBrowserLocation();

        if (location) setCurrentLocation(location.coords);
    } catch (error) {
        console.log(error);
    }
};

const getBrowserLocation = () => {
    if (!navigator.geolocation) {
        console.error(`Your browser doesn't support Geolocation`);
    }

    const geolocation = navigator.geolocation;

    return new Promise((resolve, reject) => {
        const success = (location) => resolve(location);

        const error = (err) => reject(new Error(err.message));

        geolocation.getCurrentPosition(success, error);
    });
};

export default App;
