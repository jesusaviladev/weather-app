import RoundButton from './buttons/RoundButton.jsx';
import TodayDetails from './TodayDetails.jsx';
import ForecastCard from './ForecastCard.jsx';
import Spinner from './indicators/Spinner.jsx';
import styles from './ForecastDetails.module.css';

const ForecastDetails = ({ statsDetails, loading, error }) => {
	const info = getForecastDetails(statsDetails, loading, error);

	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				<RoundButton kind="secondary">ºF</RoundButton>
				<RoundButton>ºC</RoundButton>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.futureForecast}>
					<ForecastCard
						date="Sun, Feb 28"
						weatherType={801}
						maxTemp="16"
						minTemp="11"
					/>
					<ForecastCard
						date="Sun, Feb 28"
						weatherType={801}
						maxTemp="16"
						minTemp="11"
					/>
					<ForecastCard
						date="Sun, Feb 28"
						weatherType={801}
						maxTemp="16"
						minTemp="11"
					/>
					<ForecastCard
						date="Sun, Feb 28"
						weatherType={801}
						maxTemp="16"
						minTemp="11"
					/>
					<ForecastCard
						date="Sun, Feb 28"
						weatherType={801}
						maxTemp="16"
						minTemp="11"
					/>
				</div>
				{info}
			</div>
		</div>
	);
};

const getForecastDetails = (data, loading, error) => {
	if (loading) return <Spinner />;

	if (error) return <p>Error al cargar</p>;

	return <TodayDetails {...data} />;
};

export default ForecastDetails;
