import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import API_URL from '../API';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

const App = ({ searchField, onSearchChange }) => {
  const [robots, setRobots] = useState([]);

  // retrieve the data
  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setRobots(data);
    }
    fetchData(API_URL);
  }, []);

  // filter the robots
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h2 className='loading'>Loading...</h2>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboBook</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
