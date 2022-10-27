import styles from './ProgressBar.module.css';

const ProgressBar = ({ value, className }) => {
	return (
		<div className={`${styles.progress} ${className || ''}`}>
			<span style={{ width: `${value}%` }}></span>
		</div>
	);
};

export default ProgressBar;
