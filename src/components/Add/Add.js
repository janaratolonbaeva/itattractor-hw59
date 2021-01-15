import React, {Component} from 'react';

class Add extends Component {
	render() {
		return (
			<>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Add a favorite movie" defaultValue={this.props.value} onChange={this.props.valueChange}/>
						<button className="btn btn-outline-primary" type="button" onClick={this.props.addMovie}>Add</button>
				</div>
			</>
		)
	}
}

export default Add;