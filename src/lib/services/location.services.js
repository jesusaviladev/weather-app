import {
	API_KEY,
	GEOLOCATION_API_URL,
	GEOLOCATION_DIRECT_API_URL,
} from './config.js';

export const getLocationNameByCoords = async (
	latitude,
	longitude,
	abortSignal
) => {
	try {
		const res = await fetch(
			`${GEOLOCATION_API_URL}
			?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}&limit=1`,
			{
				signal: abortSignal,
			}
		);

		const locationNameData = await res.json();

		return locationNameData;
	} catch (error) {
		console.log(error);

		return null;
	}
};

export const getLocationCoordsByCityName = async (city, abortSignal) => {
	try {
		const res = await fetch(
			`${GEOLOCATION_DIRECT_API_URL}
			?q=${city}&limit=5&appid=${API_KEY}`,
			{
				signal: abortSignal,
			}
		);

		const locationCoordsData = await res.json();

		return locationCoordsData;
	} catch (error) {
		console.log(error);

		return null;
	}
};
