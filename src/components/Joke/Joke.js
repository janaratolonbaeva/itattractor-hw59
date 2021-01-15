import React from 'react';

const Joke = ({text}) => {
	return (
		<div className="card">
				<div className="card-body">
					<p className="card-text">{text}</p>
				</div>
		</div>
	);
};

export default Joke;