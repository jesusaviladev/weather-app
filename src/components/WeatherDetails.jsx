import RoundButton from './buttons/RoundButton.jsx';
import TodayDetails from './TodayDetails.jsx';
import FutureForecast from './FutureForecast.jsx';
import Spinner from './indicators/Spinner.jsx';
import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ statsDetails, forecast, loading, error }) => {
	const info = getWeatherDetails(statsDetails, loading, error);

	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				<RoundButton kind="secondary">ºF</RoundButton>
				<RoundButton>ºC</RoundButton>
			</div>
			<div className={styles.wrapper}>
				<FutureForecast forecast={forecast} />
				{info}
			</div>
			<p className={styles.credits}>
				Created by: @jesusaviladev for{' '}
				<a
					href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv"
					target="_blank"
					rel="noreferrer"
				>
					devchalenges.io
				</a>
			</p>
		</div>
	);
};

const getWeatherDetails = (data, loading, error) => {
	if (loading) return <Spinner />;

	if (error) return <p>Error al cargar</p>;

	return <TodayDetails {...data} />;
};

export default WeatherDetails;
