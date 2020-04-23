import React, { Fragment } from "react";
import piggy from "../porco.png";
class HogCard extends React.Component {


    state = {
        clicked: false,
        hidden: false
    }

    onClick = () => {
        this.setState((prevState, props) => ({
            clicked: !prevState.clicked 
        
    }))
    }

    onHide = () => {
        this.setState((prevState) => ({
            hidden: !prevState.hidden
        }))
    }


    

  render() {
    let {id, name, specialty, greased, weight} = this.props
    let imgName = `${name.toLowerCase().replace(/ /ig,"_")}.jpg`
    let hiddenStyle = `style={{display: "none"}}`

    return (
        
        <div className =  "ui four wide column"
        style = {this.state.hidden? {display:"none"}: {}}
        >
            <div className="ui card"> 
                <div className="image">
                    <img src={require(`../hog-imgs/${imgName}`)}/>
                </div>
                <div className="content">

                    <a onClick={this.onClick} className="header">{name}</a>
                    <button onClick={this.onHide} 
                            className={"ui button"}>
                            Hide
                        </button>
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