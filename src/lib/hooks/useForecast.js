import { useState, useEffect } from 'react';
import { getWeatherForecastByLocation } from '../services/weather.services.js';

const useForecast = (location) => {
	const [forecast, setForecast] = useState({
		loading: true,
		data: [],
		error: true,
	});

	const setForecastData = (data) =>
		setForecast({ loading: false, data, error: false });

	const setError = () =>
		setForecast({ loading: false, data: [], error: true });

	useEffect(() => {
		const controller = new AbortController();

		getForecast(
			location.latitude,
			location.longitude,
			controller.signal,
			setForecastData,
			setError
		);

		return () => controller.abort();
	}, [location]);

	const forecastData = filterForecastData(forecast.data);

	return {
		data: forecastData,
		loading: forecast.loading,
		error: forecast.error,
	};
};

const filterForecastData = (data) =>
	data
		.filter((element) => new Date(element.dt_txt).getHours() === 0)
		.map((forecast) => {
			return {
				condition: {
					id: forecast.weather[0].id,
				},
				temperature: {
					min: forecast.main.temp_min,
					max: forecast.main.temp_max,
				},
				date: forecast.dt_txt,
			};
		});

const getForecast = async (
	latitude,
	longitude,
	signal,
	setForecastData,
	setError
) => {
	const data = await getWeatherForecastByLocation(
		latitude,
		longitude,
		signal
	);

	if (data) setForecastData(data);
	else setError();
};

export default useForecast;
