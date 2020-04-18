import './Summary.scss';

import React from 'react';

import SearchTable from '../SearchTable/SearchTable';

const noDataInfo = "loading...";
export default ({
  newConfirmed = noDataInfo,
  totalConfirmed = noDataInfo,
  newDeaths = noDataInfo,
  totalDeaths = noDataInfo,
  newRecovered = noDataInfo,
  totalRecovered = noDataInfo,
  confirmedCountries = noDataInfo,
  allCountries = noDataInfo,
  filterTiles }) => {
  return (
    <div className="summary">
      <span className="infoHeader">Global statistics: </span>
      <div className="sticky">
        <SearchTable filterTiles={filterTiles} />
        <div className="infoNumber">
          <span>{"NewConfirmed"}</span>
          <span className="globalNumber">{newConfirmed.toLocaleString()}</span>
        </div>
        <div className="infoNumber">
          <span>{"TotalConfirmed"}</span>
          <span className="globalNumber">{totalConfirmed.toLocaleString()}</span>
        </div>
        <div className="infoNumber">
          <span>{"NewDeaths"}</span>
          <span className="globalNumber">{newDeaths.toLocaleString()}</span>
        </div>
        <div className="infoNumber">
          <span>{"TotalDeaths"}</span>
          <span className="globalNumber">{totalDeaths.toLocaleString()}</span>
        </div>
        <div className="infoNumber">
          <span>{"NewRecovered"}</span>
          <span className="globalNumber">{newRecovered.toLocaleString()}</span>
        </div>
        <div className="infoNumber">
          <span>{"TotalRecovered"}</span>
          <span className="globalNumber">{totalRecovered.toLocaleString()}</span>
        </div>
        <div className='infoNumber infectedCountries'>
          <span className=''> {`${confirmedCountries} / ${allCountries}`}</span>
          <span className="globalNumber infectedCountriesLabel"> countries infected</span>
        </div>
      </div>
    </div>
  )
}