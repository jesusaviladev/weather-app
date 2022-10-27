import InputSearch from './form-controls/InputSearch.jsx';
import Button from './buttons/Button.jsx';
import CrossIcon from './icons/CrossIcon.jsx';
import Select from './form-controls/Select.jsx';
import styles from './SearchLocationPanel.module.css';

const SearchLocationPanel = ({ closeSearchPanel, setCurrentLocation }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<button className={styles.close} onClick={closeSearchPanel}>
					<CrossIcon className={styles.icon} />
				</button>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.search}>
					<InputSearch
						className={styles.searchInput}
						placeholder="Buscar ciudad"
					/>
					<Button className={styles.button} type="submit">
						Buscar
					</Button>
				</div>
				<Select>
					<option value="1">Caracas</option>
					<option value="2">New York</option>
					<option value="3">Madrid</option>
				</Select>
			</form>
		</div>
	);
};

const handleSubmit = (e, setCurrentLocation) => {
	e.preventDefault();
};

export default SearchLocationPanel;
