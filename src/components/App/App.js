import './App.scss';

import axios from 'axios';
import React from 'react';

import filterCountries from '../../utils/filterCountries';
import sortTiles from '../../utils/sortTiles';
import CountriesTable from '../CountriesTable/CountriesTable';
import Summary from '../Summary/Summary';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      FETCHED_DATA: {
        Global: {},
        Countries: []
      },
      countries: [],
      global: {}
    };
  }

  filterTiles = (e) => {
    const filteredCountries = filterCountries(this.state.FETCHED_DATA.Countries, e.target.value)
    this.setState({
      countries: filteredCountries
    })
  }

  sortTiles = (sortProperty) => {
    const { countries } = this.state;
    this.setState(prevState => {
      const sortType = sortProperty === prevState.sortProperty ? !prevState.sortType : 1;
      return {
        countries: countries.sort((a, b) => sortTiles(a, b, sortProperty, sortType)),
        sortProperty,
        sortType
      }
    })
  }

  getCountriesWithConfirmedCases() {
    return this.state.FETCHED_DATA.Countries.filter(country => country.TotalConfirmed !== 0).length
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary').then(response => {
      this.setState({
        FETCHED_DATA: response.data,
        countries: response.data.Countries,
        global: response.data.Global
      })
    })
  }

  render() {
    const { countries, global, FETCHED_DATA } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <span role="img" aria-label="emoji">
            #STAYHOME 😷</span>
        </header>
        <div className="content">
          <Summary
            newConfirmed={global.NewConfirmed}
            totalConfirmed={global.TotalConfirmed}
            newDeaths={global.NewDeaths}
            totalDeaths={global.TotalDeaths}
            newRecovered={global.NewRecovered}
            totalRecovered={global.TotalRecovered}
            confirmedCountries={this.getCountriesWithConfirmedCases()}
            allCountries={FETCHED_DATA.Countries.length}
            filterTiles={this.filterTiles}
          />
          <CountriesTable
            countries={countries}
            sortTiles={this.sortTiles}
          />
        </div>
      </div>
    )
  }
}

export default App;
