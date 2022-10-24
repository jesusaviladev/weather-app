import WeatherStatusIcon from './WeatherStatusIcon.jsx';
import styles from './ForecastCard.module.css';

const ForecastCard = ({ date, weatherType, maxTemp, minTemp }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.date}>{date}</h3>
			<WeatherStatusIcon weatherType={weatherType} />
			<div className={styles.temperatures}>
				<span>{maxTemp} ºC</span>
				<span>{minTemp} ºC</span>
			</div>
		</div>
	);
};

export default ForecastCard;
