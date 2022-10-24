import styles from './Spinner.module.css';
const Spinner = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.spinnerContainer}>
				<div className={styles.spinner}></div>
			</div>
			<p>Cargando...</p>
		</div>
	);
};

export default Spinner;
