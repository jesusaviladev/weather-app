import styles from './TodayDetails.module.css';

const TodayDetails = () => {
	return (
		<section className={styles.container}>
			<h2>{"Today's Hightlights"}</h2>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<h3 className={styles.title}>Wind status</h3>
					<p className={styles.text}>
						<span className={styles.value}>7</span>
						mph
					</p>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Humidity</h3>
					<p className={styles.text}>
						<span className={styles.value}>84</span>%
					</p>
					<progress
						className={styles.progress}
						min="0"
						max="100"
						value="84"
					></progress>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Visibility</h3>
					<p className={styles.text}>
						<span className={styles.value}>6,4</span>miles
					</p>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>Air pressure</h3>
					<p className={styles.text}>
						<span className={styles.value}>998</span>mb
					</p>
				</div>
			</div>
		</section>
	);
};

export default TodayDetails;
