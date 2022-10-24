import { useState, useEffect } from 'react';
import Spinner from './indicators/Spinner.jsx';
import ForecastCard from './ForecastCard.jsx';
import styles from './FutureForecast.module.css';

const FutureForecast = ({ location }) => {
	const [forecast, setForecast] = useState({
		loading: true,
		data: null,
		error: true,
	});

	const setForecastData = (data) =>
		setForecast({ loading: false, data, error: false });

	const setError = () =>
		setForecast({ loading: false, data: null, error: true });

	return (
		<div className={styles.wrapper}>
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
	);
};

export default FutureForecast;
