import Spinner from './indicators/Spinner.jsx';
import ForecastCard from './ForecastCard.jsx';
import styles from './FutureForecast.module.css';

const FutureForecast = ({ forecast }) => {
	if (forecast.loading) return <Spinner />;

	if (forecast.error) return <p>Error al cargar el pronóstico</p>;

	return (
		<div className={styles.wrapper}>
			{forecast.data.map((dailyForecast) => (
				<ForecastCard
					key={dailyForecast.date}
					date={dailyForecast.date}
					weatherType={dailyForecast.condition.id}
					minTemp={dailyForecast.temperature.min}
					maxTemp={dailyForecast.temperature.max}
				/>
			))}
		</div>
	);
};

export default FutureForecast;
