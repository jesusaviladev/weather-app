import styles from './Select.module.css';

const Select = ({ className, ...props }) => {
	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			<select {...props} className={styles.select}></select>
		</div>
	);
};

export default Select;
