import './CountryTile.scss';

import React from 'react';

export default ({
  Country = 0,
  TotalConfirmed = 0,
  TotalDeaths = 0,
  TotalRecovered = 0
}) => {

  return (
    <div className={`countryTile ${TotalConfirmed === 0 && "greenBg"}`}>
      <div className="tile">{Country.toLocaleString()}</div>
      <div className="tile">{TotalConfirmed.toLocaleString()}</div>
      <div className="tile">{TotalDeaths.toLocaleString()}</div>
      <div className="tile totalRecovered">{TotalRecovered.toLocaleString()}</div>
    </div>
  )
}