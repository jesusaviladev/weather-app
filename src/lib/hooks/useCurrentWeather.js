import { useState, useEffect } from 'react';
import { getCurrentWeatherByLocation } from '../services/weather.services.js';

const useCurrentWeather = (location) => {
	const [currentWeather, setCurrentWeather] = useState({
		loading: true,
		data: null,
		error: false,
	});

	const setForecastData = (data) =>
		setCurrentWeather({
			loading: false,
			data,
			error: false,
		});

	const setError = () =>
		setCurrentWeather({
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
			temperature: currentWeather.data?.main.temp,
			condition: {
				id: currentWeather.data?.weather[0].id,
				description: currentWeather.data?.weather[0].description,
			},
			location: currentWeather.data?.coord,
			timezone: currentWeather.data?.timezone,
			details: {
				wind: {
					speed: currentWeather.data?.wind.speed,
					direction: currentWeather.data?.wind.deg,
				},
				humidity: currentWeather.data?.main.humidity,
				pressure: currentWeather.data?.main.pressure,
				visibility: currentWeather.data?.visibility,
			},
		},
		loading: currentWeather.loading,
		error: currentWeather.error,
	};
};

const loadWeatherData = async (
	latitude,
	longitude,
	signal,
	setForecastData,
	setError
) => {
	const data = await getCurrentWeatherByLocation(latitude, longitude, signal);

	if (data) setForecastData(data);
	else setError();
};

export default useCurrentWeather;
