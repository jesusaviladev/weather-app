import { useState, useEffect } from 'react';
import { getLocationNameByCoords } from '../services/location.services.js';

const useLocationInfo = (location) => {
	const [locationInfo, setLocationInfo] = useState({
		data: null,
		loading: true,
		error: false,
	});

	const setLocationData = (data) =>
		setLocationInfo({ data, loading: false, error: false });

	const setError = (data) =>
		setLocationInfo({ data: null, loading: false, error: true });

	useEffect(() => {
		const controller = new AbortController();

		getLocationNameByCoords(location.lat, location.lon, controller.signal)
			.then((data) => setLocationData(data[0]))
			.catch((error) => {
				console.log(error);
				setError();
			});

		return () => controller.abort();
	}, [location.lat, location.lon]);

	return {
		locationName: locationInfo.data?.name,
		country: locationInfo.data?.country,
	};
};

export default useLocationInfo;
