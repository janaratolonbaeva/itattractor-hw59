import React, {Component} from 'react';

class Movie extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps,nextState) {
		return nextProps.value !== this.props.value;
	}

	render() {
		return (
			<div className="input-group mb-3 align-items-center">
				<input type="text" className="form-control" value={this.props.value} onChange={this.props.textChange}/>
				<span className="input-group-text"># {this.props.id}</span>
				<button className="btn btn-close ms-3" type="button" onClick={this.props.removeMovie}/>
			</div>
		);
	}
}

export default Movie;