import Button from './buttons/Button.jsx';
import GPSIcon from './icons/GPSIcon.jsx';
import RoundButton from './buttons/RoundButton.jsx';
import Spinner from './indicators/Spinner.jsx';
import WeatherStatsDisplay from './WeatherStatsDisplay.jsx';
import WeatherStatusIcon from './WeatherStatusIcon.jsx';
import { getBrowserLocation } from '../lib/utils/browser-location.js';
import styles from './TodayStats.module.css';

const TodayStats = ({ todayStats, setCurrentLocation, loading, error }) => {
	const stats = getWeatherInfo(todayStats, loading, error);

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<Button kind="secondary">Buscar ciudad</Button>
				<RoundButton className={styles.button}>
					<GPSIcon
						className={styles.icon}
						onClick={() => getLocation(setCurrentLocation)}
					/>
				</RoundButton>
			</div>
			{stats}
		</div>
	);
};

const getWeatherInfo = (stats, loading, error) => {
	if (loading) return <Spinner />;

	if (error) return <p className={styles.error}>Error al cargar</p>;

	return (
		<>
			<div className={styles.weatherStatus}>
				<WeatherStatusIcon weatherType={stats.condition.id} />
			</div>
			<WeatherStatsDisplay {...stats} />
		</>
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

export default TodayStats;
