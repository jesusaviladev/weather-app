import useLocationInfo from '../lib/hooks/useLocationInfo.js';
import LocationIcon from './icons/LocationIcon.jsx';
import styles from './WeatherStatsDisplay.module.css';

const WeatherStatsDisplay = ({
	temperature,
	condition,
	location,
	timezoneShift,
}) => {
	const { locationName, country } = useLocationInfo(location);

	const dateOptions = {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
	};

	const currentDate = new Date(Date.now()).toLocaleDateString(
		'es-VE',
		dateOptions
	);

	return (
		<div className={styles.stats}>
			<div className={styles.temperature}>
				<span className={styles.temperatureValue}>
					{Math.floor(temperature)}
				</span>
				<span>ºC</span>
			</div>
			<p className={styles.description}>{condition.description}</p>
			<span className={styles.date}>Hoy · {currentDate}</span>
			<span className={styles.location}>
				<LocationIcon className={styles.icon} />
				{`Lat: ${location.lat} - Long: ${location.lon}`}
			</span>
			<span>
				{locationName
					? `${locationName}, ${country}`
					: 'No hay información de su ubicación'}
			</span>
		</div>
	);
};

export default WeatherStatsDisplay;
