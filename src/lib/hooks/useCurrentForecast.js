import { useState, useEffect } from 'react';
import { getCurrentForecastByLocation } from '../services/weather.services.js';

const useCurrentForecast = (location) => {
	const [currentForecast, setCurrentForecast] = useState({
		loading: true,
		data: null,
		error: false,
	});

	const setForecastData = (data) =>
		setCurrentForecast({
			loading: false,
			data,
			error: false,
		});

	const setError = () =>
		setCurrentForecast({
			loading: false,
			data: null,
			error: true,
		});

	useEffect(() => {
		const controller = new AbortController();

		loadWeatherData(
			location.latitude,
			location.longitude,
			controller.signal,
			setForecastData,
			setError
		);

		return () => controller.abort();
	}, [location.latitude, location.longitude]);

	return {
		todayStats: {
			temperature: currentForecast.data?.main.temp,
			condition: {
				id: currentForecast.data?.weather[0].id,
				description: currentForecast.data?.weather[0].description,
			},
			location: currentForecast.data?.coord,
			timezone: currentForecast.data?.timezone,
			details: {
				windSpeed: currentForecast.data?.wind.speed,
				humidity: currentForecast.data?.main.humidity,
				pressure: currentForecast.data?.main.pressure,
				visibility: currentForecast.data?.visibility,
			},
		},
		loading: currentForecast.loading,
		error: currentForecast.error,
	};
};

const loadWeatherData = async (
	latitude,
	longitude,
	signal,
	setForecastData,
	setError
) => {
	const data = await getCurrentForecastByLocation(
		latitude,
		longitude,
		signal
	);

	if (data) setForecastData(data);
	else setError();
};

export default useCurrentForecast;
