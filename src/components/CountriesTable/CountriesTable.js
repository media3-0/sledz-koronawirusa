import './CountriesTable.scss';

import React from 'react';

import CountryTile from '../CountryTile/CountryTile';
import CountryTileHeader from '../CountryTileHeader/CountryTileHeader';

export default ({ countries, sortTiles }) => {

  return (
    <div className="countriesTable">
      <CountryTileHeader sortTiles={sortTiles} />
      {countries.length === 0 && <span> NO DATA!</span>}
      {countries.map(country =>
        <CountryTile
          key={country.Slug}
          Country={country.Country}
          TotalConfirmed={country.TotalConfirmed}
          TotalDeaths={country.TotalDeaths}
          TotalRecovered={country.TotalRecovered}
        />
      )}
    </div>
  )
}