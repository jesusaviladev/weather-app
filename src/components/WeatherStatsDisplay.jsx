import LocationIcon from './icons/LocationIcon.jsx';
import styles from './WeatherStatsDisplay.module.css';

const WeatherStatsDisplay = ({
	temperature,
	condition,
	location,
	timezoneShift,
}) => {
	const dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
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
		</div>
	);
};

export default WeatherStatsDisplay;
