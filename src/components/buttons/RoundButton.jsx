import styles from './RoundButton.module.css';

const KIND_CLASSNAMES = {
	primary: styles.primary,
	secondary: styles.secondary,
};

const RoundButton = ({ kind = 'primary', className, ...props }) => {
	const kindClassName = KIND_CLASSNAMES[kind];

	return (
		<button
			className={`${styles.button} ${kindClassName} ${className || ''}`}
			{...props}
		></button>
	);
};

export default RoundButton;
