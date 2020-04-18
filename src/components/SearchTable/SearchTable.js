import './SearchTable.scss';

import React from 'react';

export default ({ filterTiles }) => (
  <div className='searchContainer'>
    <input
      placeholder="Search..."
      className='countrySearch'
      onChange={filterTiles}
      type="text"
      name="countrySearch"
    />
  </div>
)
