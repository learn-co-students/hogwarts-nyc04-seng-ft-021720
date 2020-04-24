import React from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import TileContainer from "./TileContainer";

class App extends React.Component {

  state = {
    hogs: hogs,
    onlyGreased: false,
    sortBy: 'name',
  }

  toggleGreased = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased });
  }

  updateSort = (event) => {
    this.setState({ sortBy: event.target.value });
  }

  getFilteredHogs() {
    let filteredHogs = this.state.hogs;

    if (this.state.onlyGreased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    }

    return filteredHogs;
  }

  getSortedHogs(hogs) {
    let sortedHogs = [...hogs];
    
    sortedHogs = sortedHogs.sort((hogA, hogB) => {
      if (this.state.sortBy === 'name') {
        return hogA.name.localeCompare(hogB.name);
      } else if (this.state.sortBy === 'weight') {
        return hogB.weight - hogA.weight;
      } else {
        return 1;
      }
    });

    return sortedHogs;
  } 

  render() {
    console.log(this.state)

    const filteredHogs = this.getFilteredHogs();
    const sortedHogs = this.getSortedHogs(filteredHogs);

    return (
      <div className="App">
        <Nav 
          onlyGreased={this.state.onlyGreased} 
          toggleGreased={this.toggleGreased} 
          sortBy={this.state.sortBy}
          updateSort={this.updateSort}
          />
        <TileContainer hogs={sortedHogs} />
      </div>
    );
  }
}

export default App;
