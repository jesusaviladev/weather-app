import ProgressBar from './indicators/ProgressBar.jsx';
import styles from './TodayDetails.module.css';

const TodayDetails = ({ windSpeed, humidity, visibility, pressure }) => {
	const speed = convertToKmph(Number(windSpeed));

	const visibilityKm = convertToKm(Number(visibility));

	return (
		<section className={styles.container}>
			<h2>{"Today's Hightlights"}</h2>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<h3 className={styles.title}>Velocidad del viento</h3>
					<p className={styles.text}>
						<span className={styles.value}>{speed}</span>
						Km/h
					</p>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Humedad</h3>
					<p className={styles.text}>
						<span className={styles.value}>{humidity}</span>%
					</p>
					<ProgressBar className={styles.progress} value={humidity} />
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Visibilidad</h3>
					<p className={styles.text}>
						<span className={styles.value}>{visibilityKm}</span>Km
					</p>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Presión atmosférica</h3>
					<p className={styles.text}>
						<span className={styles.value}>{pressure}</span>hPa
					</p>
				</div>
			</div>
		</section>
	);
};

const convertToKmph = (metersPerSecond) =>
	(metersPerSecond * (3600 / 1000)).toFixed(1);

const convertToKm = (meters) => (meters / 1000).toFixed(1);

export default TodayDetails;
