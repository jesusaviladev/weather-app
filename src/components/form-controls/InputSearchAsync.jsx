import SearchIcon from '../icons/SearchIcon.jsx';
import UpdateIcon from '../icons/UpdateIcon.jsx';
import styles from './InputSearchAsync.module.css';

const InputSearchAsync = ({
	loading,
	error,
	results = [],
	renderItem,
	className,
	...props
}) => {
	const searchResults = getResults(results, renderItem, error);

	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			{loading ? (
				<UpdateIcon
					className={`${styles.inputIcon} ${styles.rotate}`}
				/>
			) : (
				<SearchIcon className={styles.inputIcon} />
			)}
			<input {...props} type="text" className={styles.input} />
			{searchResults}
		</div>
	);
};

const getResults = (results, renderItem, error) => {
	if (error) return <span className={styles.error}>Error al cargar</span>;

	if (results.length === 0)
		return <span className={styles.error}>No hay resultados</span>;

	return (
		<div className={styles.results}>
			{results.map((result, index) => (
				<div key={index} className={styles.result}>
					{renderItem(result)}
				</div>
			))}
		</div>
	);
};

export default InputSearchAsync;
