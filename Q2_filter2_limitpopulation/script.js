// 1. create a request variable
var request = new XMLHttpRequest();
// 2. create a new connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send request
request.send();
// 4. load response
request.onload = function(){
  var countrydata = JSON.parse(this.response)
  var reg = countrydata.filter((item) =>{
     return item.population<200000
})
for(i in reg)
{
    console.log(reg[i].name+ " population:" +reg[i].population)
}  
}