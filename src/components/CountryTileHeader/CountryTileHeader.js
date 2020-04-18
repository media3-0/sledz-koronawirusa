import React from 'react';

import styles from './CountryTileHeader.scss';

export default ({ sortTiles }) => (
  <div className="countryTile countryTileHeader">
    <div onClick={() => { sortTiles("Country") }} className={styles.country}>{"country"}</div>
    <div onClick={() => { sortTiles("TotalConfirmed") }} className={styles.confirmed}>{"confirmed"}</div>
    <div onClick={() => { sortTiles("TotalDeaths") }} className={styles.deaths}>{"deaths"}</div>
    <div onClick={() => { sortTiles("TotalRecovered") }} className={styles.recovered}>{"recovered"}</div>
  </div>
);
