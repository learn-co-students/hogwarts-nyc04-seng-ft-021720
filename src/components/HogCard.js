import React, { Component } from 'react';

class HogCard extends Component {

    state = {
        showDetails: false
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
        const { hogData } = this.props
        const imageName = hogData.name.replace(/ /g, "_").toLowerCase()
        return (
            <div className="pigTile" onClick={this.toggleDetails}>
                <img src={require(`../hog-imgs/${imageName}.jpg`)} alt={hogData.name}/>
                <p className="header">{hogData.name}</p>
                {this.state.showDetails ? 
                    <div>
                        Speacialty: {hogData.specialty}
                        <br/>
                        Greased: {hogData.greased ? 'Yes':'No'}
                        <br/>
                        Weight: {hogData.weight}
                        <br />
                        Medal: {hogData['highest medal achieved'].charAt(0).toUpperCase() + hogData['highest medal achieved'].slice(1)}
                    </div> : null}
            </div>
        );
    }
}

export default HogCard;
