// create a request instance
var req = new XMLHttpRequest();
// initiate a connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will be triggered when data has been received successfully.
req.onload = function(){
var data = JSON.parse(this.response);
console.log(data);

for(var i in data){
    console.log(data[i].name);   
}

//- Get all the countries from Asia continent /region using Filter function
var asianCountries = data.filter(function (el){
  return el.region === 'Asia';
});
console.log(asianCountries);

//Get all the countries with population of less than 2 lacs using Filter function
var populationLessthan2lac = data.filter(function (el){
  return el.population < 200000;
});
console.log(populationLessthan2lac);

//Print the following details name, capital, flag using forEach function
 data.forEach(function(entry) {
  console.log(`name : ${entry.name} capital : ${entry.capital} flag : ${entry.flag} `);
});

//Print the total population of countries using reduce function
var totalPop = data.reduce((a, b) => ({population: a.population + b.population}));
console.log(totalPop);

//Print the country which use US Dollars as currency.
 data.filter( (el)=>{
  for(i in el.currencies){
    if(el.currencies[i].code === 'USD'){
      return true;
    }
  }
}).map(el=>console.log(el.name));

}



