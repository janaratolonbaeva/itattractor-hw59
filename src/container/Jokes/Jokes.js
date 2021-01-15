import React, {useState, useEffect} from 'react';
import Joke from "../../components/Joke/Joke";

const Jokes = () => {
	const [jokes, setJokes] = useState('');

	const url = 'https://api.chucknorris.io/jokes/random';

	useEffect(() => {
		const fetchData = async() => {
			const response = await fetch(url);

			if (response.ok) {
				const jokes = await response.json();
				setJokes(jokes.value);
			}
 		};

		fetchData().catch(e => console.log(e));
	}, []);

	return (
				<Joke text={jokes}/>
	);
};

export default Jokes;