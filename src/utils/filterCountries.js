export default (countries, userInput) => {
  return countries.filter(country => country.Country.toLowerCase().includes(userInput.toLowerCase()));
} 
