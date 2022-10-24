import WeatherStatusIcon from './WeatherStatusIcon.jsx';
import styles from './ForecastCard.module.css';

const ForecastCard = ({ date, weatherType, maxTemp, minTemp }) => {
	const formattedDate = new Date(date).toLocaleDateString('es-VE');

	return (
		<div className={styles.card}>
			<h3 className={styles.date}>{formattedDate}</h3>
			<WeatherStatusIcon weatherType={weatherType} />
			<div className={styles.temperatures}>
				<span>{maxTemp.toFixed(0)} ºC</span>
				<span>{minTemp.toFixed(0)} ºC</span>
			</div>
		</div>
	);
};

export default ForecastCard;
