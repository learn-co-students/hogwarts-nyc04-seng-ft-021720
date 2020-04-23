import React, { Fragment } from "react";
import piggy from "../porco.png";
class HogCard extends React.Component {


    state = {
        clicked: false
    }

    onClick = () =>{
        this.setState((prevState, props) => ({
            clicked: !prevState.clicked 
        
    }))
}


    

  render() {
    let {id, name, specialty, greased, weight} = this.props
    let imgName = `${name.toLowerCase().replace(/ /ig,"_")}.jpg`


    return (
        <div className = "ui four wide column">
            <div className="ui card">
                <div className="image">
                    <img src={require(`../hog-imgs/${imgName}`)}/>
                </div>
                <div className="content">
                    <a onClick={this.onClick} className="header">{name}</a>
                    {/* <div className="meta">
                    <span className="date">{this.props.greased}</span>
                    </div> */}
                {this.state.clicked? <div className="description">
                    {specialty}
                    </div> : null }
                    
                </div>
                <div className="extra content">
                    <a>
                    <i className="user md icon"></i>
                    {weight}
                    </a>
                </div>
                </div>
        </div>
    );
  }
}

export default HogCard;