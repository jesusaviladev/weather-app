export const getBrowserLocation = () => {
	if (!navigator.geolocation) {
		console.error(`Your browser doesn't support Geolocation`);
	}

	const geolocation = navigator.geolocation;

	return new Promise((resolve, reject) => {
		const success = (location) => resolve(location);

		const error = (err) => reject(new Error(err.message));

		geolocation.getCurrentPosition(success, error);
	});
};
