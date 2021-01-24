// 1. create a request variable
var request = new XMLHttpRequest();
// 2. create a new connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send request
request.send();
// 4. load response
request.onload = function(){
  var countrydata = JSON.parse(this.response)
  var totalpopulation = countrydata.reduce((acc,country)=>{
      return acc + country.population
  },0) 

console.log(totalpopulation)
}