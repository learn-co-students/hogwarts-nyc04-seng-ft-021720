import React, { Fragment } from "react";


class Filter extends React.Component {




  render(){
    let active = "ui button active"
      return(
        
    <div>
        <button onClick={this.props.filter} 
        className={this.props.filterStates.nameSort? active : "ui button"} 
        name="nameSort">
            Sort By Name
            </button>
        <button onClick={this.props.filter} 
            className={this.props.filterStates.greasedFilter? active : "ui button"}         
            name="greasedFilter">
            Filter Greased
            </button>
        <button onClick={this.props.filter} 
        className = {this.props.filterStates.weightSort? active : "ui button"} 
        name="weightSort">
            Sort By Weight
            </button>

            </div>      
    )
  }
}

export default Filter;