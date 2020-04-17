import './CountryTile.scss';

import React from 'react';

export default ({
  Country,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered
}) => {

  return (
    <div className="countryTile">
      <div className="tile">{Country}</div>
      <div className="tile">{TotalConfirmed}</div>
      <div className="tile">{TotalDeaths}</div>
      <div className="tile">{TotalRecovered}</div>
    </div>
  )
}