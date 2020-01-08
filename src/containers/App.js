import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import api_url from '../API';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    };

    async componentDidMount() {
        const response = await fetch(api_url);
        const users = await response.json();
        this.setState({ robots: users });
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
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
            <h2 className='loading'>Loading...</h2>
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboBook</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

    };
};


export default App;