import React, {Component} from 'react';
import Add from "../../components/Add/Add";
import './Movies.css';
import Movie from "../../components/Movie/Movie";

class Movies extends Component {
	state = {
		value: '',
		movies: []
	}

	valueChange = (e) => {
		this.setState({value: e.target.value});
	}

	textChange = (e, index) => {
		const copyState = [...this.state.movies];
		const movie = copyState[index];
		movie.text = e.target.value;

		this.setState({movies: copyState});
	}

	addMovie = () => {
		const moviesCopy = [...this.state.movies];
		if (this.state.value !== '') {
			moviesCopy.push({
				text: this.state.value
			})
		}
		this.setState({movies: moviesCopy});
	};

	removeMovie = index => {
		const moviesCopy = [...this.state.movies];

		moviesCopy.splice(index, 1);
		this.setState({movies: moviesCopy});
	}

	render() {
		const moviesList = this.state.movies.map((item, index) => (
			<Movie key={index} id={index + 1} value={item.text} textChange={e => this.textChange(e, index)} removeMovie={() => this.removeMovie(index)}/>
		))
		return (
			<>
				<div className="container">
					<section className="movie-block">
						<Add value={this.state.value} valueChange={this.valueChange} addMovie={this.addMovie}/>
						<div className="mb-3">
							<p>To watch list:</p>
						</div>
						{moviesList}
					</section>
				</div>
			</>
		);
	}
}

export default Movies;