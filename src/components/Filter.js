import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                <label>
                    Filter Hogs:
                        <select value={this.props.greaseFilter} onChange={this.props.updateGreaseFilter}>
                            <option value="all">All Hogs</option>
                            <option value="greased">Greased</option>
                            <option value="ungreased">Ungreased</option>
                        </select>
                </label>
                <br/>
                <label>
                    Sort Hogs:
                        <select value={this.props.sortBy} onChange={this.props.updateSort}>
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                </label>
            </div>
        );
    }
}

export default Filter;