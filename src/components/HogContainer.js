import React, { Fragment } from "react";
import HogCard from "./HogCard";


class HogContainer extends React.Component {

  renderHogs = () =>{
    return this.props.pigs().map(pigs =>{
      return <HogCard
          key = {pigs.name}
          id = {pigs.id}
          name = {pigs.name} 
          specialty = {pigs.specialty}
          greased = {pigs.greased}
          weight = {pigs.weight}
          />
    })
  }

  render() {
    return (
      // <React.Fragment>
        <div className="ui grid container">
            {this.renderHogs()}
        </div>
      // </React.Fragment>
    );
  }
}

export default HogContainer;

// return this.props.pigs.map(pigs =>{
//   return <h1 
//       key = {pigs.name}
//       id = {pigs.id}
//       name = {pigs.name} 
//       specialty = {pigs.specialty}
//       greased = {pigs.greased}
//       weight = {pigs.weight}
//       />
// }