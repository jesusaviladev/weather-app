const WeatherStatusIcon = ({ weatherType }) => {
	const image = getWeatherIcon(Number(weatherType));

	return (
		<div>
			<img src={`/assets/conditions/${image}`} alt="Weather Image" />
		</div>
	);
};

const getWeatherIcon = (id) => {
	if (id >= 200 && id <= 232) return 'Thunderstorm.png';

	if (id >= 300 && id <= 321) return 'LightRain.png';

	if (id >= 500 && id <= 504) return 'HeavyRain.png';

	if (id === 511) return 'Sleet.png';

	if (id >= 520 && id <= 531) return 'Shower.png';

	if (id === 611) return 'Sleet.png';

	if (id >= 600 && id <= 622) return 'Snow.png';

	if (id >= 701 && id <= 781) return 'Hail.png';

	if (id === 800) return 'Clear.png';

	if (id === 801) return 'LightCloud.png';

	if (id >= 802 && id <= 804) return 'HeavyCloud.png';

	return 'LightCloud.png';
};

export default WeatherStatusIcon;
