import RoundButton from './buttons/RoundButton.jsx';
import TodayDetails from './TodayDetails.jsx';
import FutureForecast from './FutureForecast.jsx';
import Spinner from './indicators/Spinner.jsx';
import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ statsDetails, loading, error }) => {
	const info = getWeatherDetails(statsDetails, loading, error);

	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				<RoundButton kind="secondary">ºF</RoundButton>
				<RoundButton>ºC</RoundButton>
			</div>
			<div className={styles.wrapper}>
				<FutureForecast location={{ latitude: 10, longitude: -66 }} />
				{info}
			</div>
		</div>
	);
};

const getWeatherDetails = (data, loading, error) => {
	if (loading) return <Spinner />;

	if (error) return <p>Error al cargar</p>;

	return <TodayDetails {...data} />;
};

export default WeatherDetails;
