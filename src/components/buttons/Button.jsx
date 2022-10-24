import styles from './Button.module.css';

const KIND_CLASSNAMES = {
	primary: styles.primary,
	secondary: styles.secondary,
};

const Button = ({ kind = 'primary', className, ...props }) => {
	const kindClassName = KIND_CLASSNAMES[kind];

	return (
		<button
			className={`${styles.button} ${kindClassName} ${className || ''}`}
			{...props}
		></button>
	);
};

export default Button;
