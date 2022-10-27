import { useState, useEffect } from 'react';
import { DEFAULT_LOCATION } from './constants/location.js';
import useCurrentWeather from './lib/hooks/useCurrentWeather.js';
import useForecast from './lib/hooks/useForecast.js';
import { getBrowserLocation } from './lib/utils/browser-location.js';
import TodayStats from './components/TodayStats.jsx';
import SearchLocationPanel from './components/SearchLocationPanel.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';
import styles from './App.module.css';

const App = () => {
    const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        getLocation(setCurrentLocation);
    }, []);

    const { todayStats, loading, error } = useCurrentWeather(currentLocation);

    const forecast = useForecast(currentLocation);

    return (
        <div className={styles.wrapper}>
            {showSearch ? (
                <SearchLocationPanel
                    setCurrentLocation={setCurrentLocation}
                    closeSearchPanel={() => setShowSearch(false)}
                />
            ) : (
                <TodayStats
                    todayStats={todayStats}
                    openSearchPanel={() => setShowSearch(true)}
                    setCurrentLocation={setCurrentLocation}
                    loading={loading}
                    error={error}
                />
            )}
            <WeatherDetails
                statsDetails={todayStats.details}
                forecast={forecast}
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

export default App;
