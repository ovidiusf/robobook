import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    };

    // use arrow functions for selfmade functions
    //constructor and render come with react and can use the older syntax
    // if using the same syntax, the this. will call the input field, not the App
    // hence not allowing us to access this.state

    // in order to update state, we always use this.setState
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    // Renders the app component; inside we have props for SearchBox and CardList; searchChange is a prop for SearchBox
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>RoboBook</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    };
};


export default App;