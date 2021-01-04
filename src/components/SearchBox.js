import React from 'react';

// every time the on change event is triggered, call the onchange function
// searchChange is the prop that is passed
const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--blue bg-lightest-blue'
        type='search'
        size='35'
        placeholder='Search your robot friends...'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
