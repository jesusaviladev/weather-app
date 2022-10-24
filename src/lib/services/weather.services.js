import { API_KEY, CURRENT_WEATHER_API_URL } from './config.js';

/**
 * Retorna la información de la API para el pronóstico del clima según las
 * coordenadas proporcionadas
 * @param {number} latitude Coordenada de latitud
 * @param {number} longitude Coordenada de longitud
 * @param {object} abortSignal Señal para abortar la petición
 */

export const getCurrentForecastByLocation = async (
	latitude,
	longitude,
	abortSignal
) => {
	try {
		const res = await fetch(
			`${CURRENT_WEATHER_API_URL}
			?lat=${latitude}&lon=${longitude}
			&appid=${API_KEY}&lang=es&units=metric`,
			{
				signal: abortSignal,
			}
		);

		const forecastData = await res.json();

		return forecastData;
	} catch (error) {
		console.log(error);

		return null;
	}
};
