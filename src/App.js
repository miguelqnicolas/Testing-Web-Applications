import React, {useState} from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

const App = () => {
	const [strikes, setStrikes] = useState(0);
	const [balls, setBalls] = useState(0);

	const strike = () => {
		if (strikes === 2) {
			setStrikes(0);
		} else {
			setStrikes(strikes + 1);
		}
	};

	const ball = () => {
		if (balls === 3) {
			setBalls(0);
		} else {
			setBalls(balls + 1);
		}
	};

	const foul = () => {
		if (strikes === 0) {
			setStrikes(1);
		} else if (strikes === 1) {
			setStrikes(2);
		}
	};

	const hit = () => {
		setStrikes(0);
		setBalls(0);
	};
	
	return (
		<>
			<Display balls={balls} strikes={strikes}/>
			<Dashboard strike={strike} ball={ball} foul={foul} hit={hit}/>
		</>
	);
};

export default App;
