import React from 'react';
import Tile from './Tile';

class TileContainer extends React.Component {

	generateTiles(hogs) {
		return hogs.map(hog => {
			return <Tile key={hog.name} hog={hog} />;
		});
	}

	render() {
		return <pig className="tile-container">{this.generateTiles(this.props.hogs)}</pig>;
	}
}

export default TileContainer;