import React, { Component } from "react";
import HogCard from "./HogCard";


class HogsContainer extends Component {
    
    renderHogCards = (hogsData) => {
        return hogsData.map(hogData => <HogCard key={hogData.name} hogData={hogData} />)
    }

    render() {
        return (
            <div className="ui grid container">
                {this.renderHogCards(this.props.hogsData)}
            </div>
        );
    }
}

export default HogsContainer;
