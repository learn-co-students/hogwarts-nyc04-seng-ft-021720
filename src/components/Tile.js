import React from 'react';

class Tile extends React.Component{

	state = {
		showDetails: false,

	}

	toggleDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		});
	}

	render() {

		const {name, specialty, greased, weight} = this.props.hog;
		const highestMedalAchieved = this.props.hog['highest medal achieved'];
		
		const imgName = `${name.toLowerCase().replace(/ /ig, '_')}.jpg`;

		return (
			<div className="tile" onClick={this.toggleDetails}>
				<img src={require(`../hog-imgs/${imgName}`)} alt="{name} the pig" />
				<p>Name: {name}</p>
				{this.state.showDetails ?
					<div>
					<p>specialty: {specialty}</p>
					<p>greased: {greased ? 'yup' : 'nope'}</p>
					<p>weight: {weight}</p>
					<p>highestMedalAchieved: {highestMedalAchieved}</p>
					</div>
				: null}
			</div>
		);
	}
}

export default Tile;
