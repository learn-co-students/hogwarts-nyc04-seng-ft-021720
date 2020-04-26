import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {
    state = {
        hogsData: hogs,
        greaseFilter: "all",
        sortBy: "name"
    }

    updateGreaseFilter = (event) => {
        this.setState({greaseFilter: event.target.value}, () => console.log(this.state))
    }

    updateSort = (event) => {
        this.setState({sortBy: event.target.value}, () => console.log(this.state))
    }

    getFilteredHogsData = () => {
        let filteredHogsData = [...this.state.hogsData]
        switch (this.state.greaseFilter) {
            case "greased":
                return filteredHogsData = filteredHogsData.filter(hogData => hogData.greased)
            case "ungreased":
                return filteredHogsData = filteredHogsData.filter(hogData => !hogData.greased)
            default:
                return filteredHogsData
            }
    }

    sortHogsData = (hogsData) => {
        let sortedHogsData = [...hogsData]
        switch (this.state.sortBy) {
            case "name":
                return sortedHogsData.sort((hogA, hogB) => {
                    return hogA.name.localeCompare(hogB.name)
                    // Alternate Option:
                    // if (hogA.name < hogB.name) {
                    //     return -1
                    // }
                    // if (hogB.name > hogA.name) {
                    //     return 0
                    // }
                })
            case "weight":
                return sortedHogsData.sort((hogA, hogB) => {
                    // descending order
                    return hogB.weight - hogA.weight
                    // ascending order
                    // return hogA.weight - hogB.weight
                })
            default: 
                return sortedHogsData
        }
    }

    render() {
        const filteredHogsData = this.getFilteredHogsData()
        const sortedHogsData = this.sortHogsData(filteredHogsData)
        return (
        <div className="App">
            <Nav 
                greaseFilter={this.state.greaseFilter} 
                updateGreaseFilter={this.updateGreaseFilter}
                sortBy={this.state.sortBy}
                updateSort={this.updateSort}
            />
            <HogsContainer hogsData={sortedHogsData}/>
        </div>
        );
    }
}

export default App;
