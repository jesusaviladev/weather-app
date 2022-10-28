import { useState, useEffect } from 'react';
import { getLocationCoordsByCityName } from '../lib/services/location.services.js';
import InputSearchAsync from './form-controls/InputSearchAsync.jsx';
import Button from './buttons/Button.jsx';
import CrossIcon from './icons/CrossIcon.jsx';
import Select from './form-controls/Select.jsx';
import styles from './SearchLocationPanel.module.css';

const SearchLocationPanel = ({ closeSearchPanel, setCurrentLocation }) => {
	const [searchResults, setSearchResults] = useState({
		data: [],
		loading: false,
		error: false,
	});

	const [cityName, setCityName] = useState('');

	const setSearchData = (newData) =>
		setSearchResults({ data: newData, loading: false, error: false });

	const setLoading = () =>
		setSearchResults({ data: [], loading: true, error: false });

	const setError = () =>
		setSearchResults({ data: [], loading: false, error: true });

	const reset = () =>
		setSearchResults({
			data: [],
			loading: false,
			error: false,
		});

	useEffect(() => {
		if (!cityName) return;

		setLoading();

		const controller = new AbortController();

		const timeoutId = setTimeout(() => {
			// Timeout para el debounce
			getSearchedLocation(
				cityName,
				controller.signal,
				setSearchData,
				setError
			);
		}, 500);

		return () => {
			controller.abort();
			clearTimeout(timeoutId);
			reset();
		};
	}, [cityName]);

	const renderItem = (item) => (
		<span
			className={styles.searchResult}
			onClick={() => handleClose(item)}
		>{`${item.name}, ${item.country}`}</span>
	);

	const handleClose = (item) => {
		const { lat, lon } = item;

		setCurrentLocation({ latitude: lat, longitude: lon });
		closeSearchPanel();
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<button className={styles.close} onClick={closeSearchPanel}>
					<CrossIcon className={styles.icon} />
				</button>
			</div>
			<div className={styles.form}>
				<div className={styles.search}>
					<InputSearchAsync
						className={styles.searchInput}
						placeholder="Buscar ciudad"
						autoComplete="off"
						results={searchResults.data}
						renderItem={renderItem}
						loading={searchResults.loading}
						error={searchResults.error}
						onChange={(e) => setCityName(e.target.value)}
						value={cityName}
					/>
					<Button className={styles.button}>Buscar</Button>
				</div>
			</div>
		</div>
	);
};

const getSearchedLocation = async (
	cityName,
	signal,
	setSearchData,
	setError
) => {
	const res = await getLocationCoordsByCityName(cityName, signal);

	if (res) {
		setSearchData(res);
	} else {
		setError();
	}
};

export default SearchLocationPanel;
