import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./Filter"
import hogs from "../porkers_data";


class App extends Component {

  state = {
    pigs: [],
    filters: {
      greasedFilter: false,
      nameSort: false,
      weightSort: false
    }
  }

  componentDidMount(){
    this.setState({
      pigs: hogs
    })
  }


  handleFilterClick = (event) =>{

    let oldState = {...this.state}
    oldState["filters"][event.target.name] = !oldState["filters"][event.target.name]
    this.setState({
      oldState
    })    

    this.pigStateUpdate()
  }

  pigStateUpdate = () =>{
    
    let currentPigs = [...this.state.pigs]

    if(this.state.filters.greasedFilter){
      currentPigs = currentPigs.filter(pigs => pigs.greased === true)
    }


    if(this.state.filters.nameSort){
      currentPigs = currentPigs.sort(function (pig1, pig2) {
        return (pig1.name < pig2.name ? -1 : (pig1.name > pig2.name ? 1 : 0));
      });
    }

  
    
    if(this.state.filters.weightSort){
      currentPigs = currentPigs.sort(function (pig1, pig2){
        return pig1.weight - pig2.weight
      })

    }

    return currentPigs
  }

  


  render() {
    return (
      <div onClick={this.onClick}className="App">
          <Nav />
          <Filter filter ={this.handleFilterClick} filterStates = {this.state.filters}/>
          <br></br>
          <HogContainer pigs = {this.pigStateUpdate}/>
      </div>
    );
  }
}

export default App;
