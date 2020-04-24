import React from 'react';

class Filter extends React.Component{
	render() {
		return(
			<div>
				<label htmlFor="onlyGreasedCheckbox">
					Only Greased?
					<input id="onlyGreasedCheckbox" 
						type="checkbox" 
						value={this.props.onlyGreased} 
						onChange={this.props.toggleGreased} 
					/>
				</label>
				<label htmlFor="sortBySelect">
					Sort by:
					<select name="sortBySelect" id="sortBySelect"
						value={this.props.sortBy} 
						onChange={this.props.updateSort} 
					>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</label>
			</div>
		);
	}
}

export default Filter