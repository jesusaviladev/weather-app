import SearchIcon from '../icons/SearchIcon.jsx';
import styles from './InputSearch.module.css';

const InputSearch = ({ className, ...props }) => {
	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			<SearchIcon className={styles.inputIcon} />
			<input {...props} type="text" className={styles.input} />
		</div>
	);
};

export default InputSearch;
